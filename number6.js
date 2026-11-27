const textInput = document.getElementById("textInput");
const btn=document.getElementById("btn");
const result=document.getElementById("result");

btn.addEventListener("click",()=> {
    const parts=textInput.value.split(" ");
    let items=[];
    
    parts.forEach((part)=> {
        const n=part.trim();
        if(n !=="") {
            items.push(n);

        };
    });

    let maxlength=items[0]
    items.forEach((item)=> {
        if(item.length>maxlength.length) {
            maxlength=item;
        };
    });
    if(items.length===0) {
        result.textContent="数字を入力してください";
        return;
    };
    result.textContent="いちばん長い単語 :"+ maxlength;
    
});