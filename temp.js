const celsius =document.getElementById("celsius");
const toF =document.getElementById("toF");
const result=document.getElementById("result");

toF.addEventListener("click",()=> {
    const a=Number(celsius.value);
    const kashi=a*1.8+32;
    result.textContent=kashi.toFixed(1)+"℉";
});