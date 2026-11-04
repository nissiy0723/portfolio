const  loadBtn=document.getElementById("loadBtn");
const statusEl=document.getElementById("status");

loadBtn.addEventListener("click",()=> {
    statusEl.textContent="読み込み中...";
    loadBtn.disabled =  true;
    setTimeout(()=> {
        statusEl.textContent="取得成功!";
        loadBtn.disabled=false;
    },2000);
});