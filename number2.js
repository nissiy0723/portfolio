const Input=document.getElementById("textInput");
const btn=document.getElementById("btn");
const result=document.getElementById("result");

btn.addEventListener("click",()=> {
    const parts=Input.value.split(",");

    let numbers=[];
    let sum=0;
    parts.forEach((part) => {
        const n=Number(part.trim());
        if(!isNaN(n)&&part.trim()!=="") {
            numbers.push(n);
            sum+=n;
        }
    });
    if(numbers.length===0) {
        result.textContent="数字を入力してください";
        return;
    };
    

    const average=sum/numbers.length;
    result.textContent="平均: "+average.toFixed(1);

});