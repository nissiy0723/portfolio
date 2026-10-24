const textInput=document.getElementById("textInput");
const count=document.getElementById("count");

textInput.addEventListener("input", ()=> {
    count.textContent= textInput.value.length;
});