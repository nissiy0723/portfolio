const query = document.getElementById("query");
const btn = document.getElementById("btn");
const statusEl=document.getElementById("status")
const flag = document.getElementById("flag");
const info=document.getElementById("info");

btn.addEventListener("click",async()=> {
    const Input = query.value.trim().toLowerCase();
    if(Input==="") {
        statusEl.textContent="入力してください";
        flag.style.display="none";
        info.textContent="";
        return;
    };
        statusEl.textContent="読み込み中…";
        flag.style.display="none";
        info.textContent="";
        btn.disabled=true;

        try {
            const response = await fetch("https://countries.dev/name/"+Input)
            if(!response.ok) {
                throw new Error("対象が見つかりません");
            };
            const data=await response.json();

            const country=data[0];

            flag.src=country.flags.png;
            flag.style.display="block";

            


            info.textContent="国名: "+country.name + " / 首都: "+country.capital + " / 人口: "+country.population.toLocaleString();
            statusEl.textContent="";
        }catch(error) {
            statusEl.textContent="データの取得に失敗しました";
             flag.style.display="none";
    info.textContent="";
        }finally {
            btn.disabled=false;
        };

});