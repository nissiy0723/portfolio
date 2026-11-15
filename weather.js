const city = document.getElementById("city");
const btn=document.getElementById("btn");
const statusEl = document.getElementById("status");
const result = document.getElementById("result");
const favBtn=document.getElementById("favBtn");
const favList = document.getElementById("favList");

    let favorites=[]

    function load() {
    favorites=JSON.parse(localStorage.getItem("favCities")) || [];}

    function save() {
        localStorage.setItem("favCities", JSON.stringify(favorites));
    }

    function renderFavorites() {
        favList.innerHTML="";
        favorites.forEach((n)=> {
            const li=document.createElement("li");
            const button=document.createElement("button");
            button.textContent=n;
            button.addEventListener("click", ()=> {
                city.value=n;
            });
              const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "削除";

        deleteBtn.addEventListener("click", () => {
            favorites = favorites.filter((name) => name !== n);

            save();
            renderFavorites();
        });

            li.appendChild(button);
            favList.appendChild(li);
            li.appendChild(deleteBtn);

        });
    }
    load();
    renderFavorites();

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
        renderFavorites();
        statusEl.textContent="お気に入りに追加しました";
    });
btn.addEventListener("click",async()=> {
    const Input = city.value.trim()
    if(Input==="") {
        statusEl.textContent="入力してください";
        result.textContent="";
        return;
    };
    statusEl.textContent="読み込み中…";
    result.textContent="";
    btn.disabled=true;

    try{
        const response=await fetch("https://geocoding-api.open-meteo.com/v1/search?name="+ encodeURIComponent(Input) + "&count=1");
        
        const geodata=await response.json();

        if(!geodata.results || geodata.results.length===0 ) {
            throw new Error("都市が見つかりません")
        };

        const place=geodata.results[0];
        const lat = place.latitude;
        const lon = place.longitude;
        const placeName= place.name;

        const weather = await fetch("https://api.open-meteo.com/v1/forecast?latitude="
            +lat + 
            "&longitude="
           + lon + 
           "&current=temperature_2m");
           const weatherdata = await weather.json();

           const temp = weatherdata.current.temperature_2m;

           statusEl.textContent="";
           result.textContent= placeName +"の気温: "+ temp + "℃";
           


    }catch(error) {
        statusEl.textContent="データ取得に失敗しました";
        result.textContent="";
    }finally {
        btn.disabled=false;
    };

});

