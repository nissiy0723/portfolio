const height=document.getElementById("height");
const weight=document.getElementById("weight");
const calcBtn=document.getElementById("calcBtn");
const result=document.getElementById("result");

calcBtn.addEventListener("click",()=>{
   

    const a=Number(height.value)/100;
    const b=Number(weight.value);
 if(!height.value || !weight.value || a===0) {
        result.textContent="身長と体重を入力してください";
        result.style.color="red";
        return;
    };
    const BMI=b/(a*a);

 result.style.color=""
    result.textContent="BMI: "+ BMI.toFixed(1);


});