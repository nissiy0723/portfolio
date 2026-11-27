const Input=document.getElementById("textInput");
const btn=document.getElementById("btn");
const result=document.getElementById("result");
const odds=document.getElementById("odds");
const evens=document.getElementById("evens");

btn.addEventListener("click",()=> {
    const parts=Input.value.split(",");
    let numbers=[];

    parts.forEach((part)=> {
        const n=Number(part.trim());
        if(!isNaN(n)&&part.trim()!==""){
            numbers.push(n);
        };
    });
    const even=numbers.filter((n)=> n%2===0);
    const odd=numbers.filter((n)=> n%2!==0);

    evens.textContent="偶数: "+(even.length ? even.join(", ") : "なし");
    odds.textContent="奇数: "+(odd.length ? odd.join(", ") : "なし");
});