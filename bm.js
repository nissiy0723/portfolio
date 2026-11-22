const height =document.getElementById("height");
const weight=document.getElementById("weight");
const btn=document.getElementById("btn");
const result=document.getElementById("result");
const statusEl=document.getElementById("status")

btn.addEventListener("click",()=> {

    if(height.value === "" || weight.value === "") {
    statusEl.textContent = "身長と体重を入力してください";
    result.textContent="";
    return;
}

    const h=Number(height.value/100);
    const w=Number(weight.value);


    const bmi=w/(h*h);


    result.textContent=bmi.toFixed(2);
    if(bmi<18.5) {
        statusEl.textContent="低体重";
    }else if(bmi>=18.5 && bmi<25){
        statusEl.textContent="普通体重";
    }else {
        statusEl.textContent="肥満気味";
    };
    
});