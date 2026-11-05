const btn = document.getElementById("btn");
const statusEl=document.getElementById("status");
const photo = document.getElementById("photo");

btn.addEventListener("click",async()=> {
    statusEl.textContent="読み込み中…";
    btn.disabled=true;
    try {
        const response=await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        photo.src=data.message;
        statusEl.textContent="";
    }catch(error){
        statusEl.textContent="取得に失敗しました";

    }finally {
        btn.disabled=false;
    };
});