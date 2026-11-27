const textInput = document.getElementById("textInput");
const btn=document.getElementById("btn");
const result=document.getElementById("result");

btn.addEventListener("click",()=> {
    const parts=textInput.value.split(",");
    let items=[];
    
    parts.forEach((part)=> {
        const n=Number(part.trim());
        if(!isNaN(n)&&part.trim()!=="") {
            items.push(n);

        };
    });

    const qnique=[]
    items.forEach((item)=> {
        if(!qnique.includes(item)){
            qnique.push(item);
        };
    })
    if(items.length===0) {
        result.textContent="数字を入力してください";
        return;
    };
    result.textContent=qnique;
    
});