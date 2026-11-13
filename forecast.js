const city=document.getElementById("city");
const btn=document.getElementById("btn");
const statusEl=document.getElementById("status");
const place=document.getElementById("place");
const list=document.getElementById("list");
const favbtn=document.getElementById("favBtn");
const favList=document.getElementById("favList");

let favorites=[];

 function load() {
    favorites=JSON.parse(localStorage.getItem("favCities")) || [];};

    function save() {
        localStorage.setItem("favCities", JSON.stringify(favorites));
    };

    function render() {
        favList.innerHTML="";
        favorites.forEach((n) =>{
            const li = document.createElement("li");
            const Btn=document.createElement("button");
            Btn.textContent=n;
            Btn.addEventListener("click", ()=> {
                city.value=n;
            });
            const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "削除";

        deleteBtn.addEventListener("click", () => {
            favorites = favorites.filter((name) => name !== n);

            save();
            render();
        });
            li.appendChild(Btn);
            li.appendChild(deleteBtn);
            favList.appendChild(li);
            
        });
    };
    load();
    render();

    favBtn.addEventListener("click",()=> {
        const n = city.value.trim();
        if(n==="") {
            statusEl.textContent="入力してください";
            return;
        }
        if(favorites.includes(n)) {
            statusEl.textContent="すでにお気に入りです";
            return;
        }
        favorites.push(n);
        save();
        render();
        statusEl.textContent="お気に入りに追加しました";
    });
btn.addEventListener("click",async()=> {
    const Input = city.value.trim();
    if(Input==="") {
        statusEl.textContent="入力してください";
        place.textContent="";
        list.textContent="";
        return;
    };
    statusEl.textContent="読み込み中…";
    place.textContent="";
    list.textContent="";
    btn.disabled=true;

    try {
        const response = await fetch("https://geocoding-api.open-meteo.com/v1/search?name="+ encodeURIComponent(Input) + "&count=1")
        const geodata=await response.json();

        if(!geodata.results || geodata.results.length===0 ) {
        throw new Error("都市が見つかりません")
        };

        const  location=geodata.results[0];
        const lat = location.latitude;
        const lon = location.longitude;

        const weather = await fetch("https://api.open-meteo.com/v1/forecast?latitude="
            +lat + 
            "&longitude="
           + lon + 
           "&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&forecast_days=3");
           const weatherData = await weather.json();

           const days=weatherData.daily.time;
           const maxs = weatherData.daily.temperature_2m_max;
           const mins = weatherData.daily.temperature_2m_min;

           place.textContent=location.name;
            days.forEach((day, i)=> {
                const li=document.createElement("li");
                li.textContent=
                day+" 最高 " + maxs[i] + "℃ / 最低 " + mins[i] +"℃";
                list.appendChild(li);
            });
            statusEl.textContent="";
    }catch(error) {
        statusEl.textContent="取得に失敗しました";
        place.textContent="";
        list.innerHTML="";
    }finally {
        btn.disabled=false;
    };
});