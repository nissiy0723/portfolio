const query =document.getElementById("query");
const btn = document.getElementById("btn");
const statusEl =document.getElementById("status");
const sprite = document.getElementById("sprite");
const info = document.getElementById("info");

btn.addEventListener("click",async()=> {
    
    const Input =query.value.trim().toLowerCase();

    if(Input==="") {
        statusEl.textContent="名前か番号を入力してください";
        sprite.style.display="none";
        info.textContent="";
        return;
    }
    statusEl.textContent="読み込み中…";
    sprite.style.display="none";
    info.textContent="";
    btn.disabled=true;
    try {
        const response=await fetch("https://pokeapi.co/api/v2/pokemon/"+Input);
        if(!response.ok) {
        throw new Error("対象が見つかりません");
        }
    
        const data=await response.json();
            sprite.src=data.sprites.front_default;
            sprite.style.display="block";
            info.textContent="名前: "+ data.name + " / 番号: " + data.id;
            statusEl.textContent="";

    }catch(error) {
        statusEl.textContent="取得に失敗しました";
         sprite.style.display="none";
    info.textContent="";
    }finally{
        btn.disabled=false
    }

});