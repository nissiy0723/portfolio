const title=document.getElementById("title")

const btnn=document.getElementById("btnn")
const textInput=document.getElementById("textinput")
const result=document.getElementById("result")
btn.addEventListener("click",()=> {
    title.textContent="こんにちは西下さん";
});
btnn.addEventListener("click",()=> {
    const value = textInput.value;
    result.textContent = value;
});