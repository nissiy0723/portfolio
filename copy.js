const text=document.getElementById("text");
const copy=document.getElementById("copy");
const message = document.getElementById("message");

copy.addEventListener("click", async()=> {
    const value=text.textContent;
    try{
    await navigator.clipboard.writeText(value);
    message.textContent="コピーしました"

    setTimeout(()=> {
        message.textContent="";

    },2000);
}catch(error){
    message.textContent="コピーに失敗しました"
};
});