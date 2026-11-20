const btn=document.getElementById("btn");
const statusEl=document.getElementById("status");
const result=document.getElementById("result");


btn.addEventListener("click",async()=> {
        statusEl.textContent="読み込み中…";
        result.textContent="";
        btn.disabled=true;
    try{
    const response=await fetch("https://dummyjson.com/quotes/random");

    if(!response.ok) {
        throw new Error("取得に失敗しました");
    }
    const data=await response.json();
    result.textContent=data.quote+" - "+ data.author;
    statusEl.textContent="";
    }catch(error){
        statusEl.textContent="読み込みに失敗しました";
      result.textContent="";
    }finally{
        btn.disabled=false;
    }
});