const textInput=document.getElementById("textInput");
const btn=document.getElementById("btn");
const result=document.getElementById("result");

btn.addEventListener("click",()=> {
    const text=textInput.value;

    const reversed=text.split("").reverse().join("");

    result.textContent=reversed;
});