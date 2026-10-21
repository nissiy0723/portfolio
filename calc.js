const num1=document.getElementById("num1")
const num2=document.getElementById("num2")
const calcBtn=document.getElementById("calcBtn")
const result=document.getElementById("result")
const operator=document.getElementById("operator")

let answer;


calcBtn.addEventListener("click",()=> {
    const a = Number(num1.value);
const b = Number(num2.value);
const op = operator.value;

if (op=== "+"){
    answer=a+b;
}else if (op==="-") {
    answer=a-b;
}else if(op==="*") {
    answer=a*b;
}else if(op==="/") {
    answer=a/b;
};
    result.textContent="結果: "+answer
    
});

