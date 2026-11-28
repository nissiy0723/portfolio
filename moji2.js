const Input=document.getElementById("textInput");
const btn=document.getElementById("btn");
const result=document.getElementById("result");

btn.addEventListener("click",()=> {
    const input=Input.value
    const  counts={};
    let output=[];
    let max=0
    let winner=[];
    for(let i=0;i<input.length;i++) {
        const char=input[i];

        if(!counts[char]) {
            counts[char]=1
        }else {
            counts[char]++;
        };

    };
    for(const char in counts) {
        if(max<counts[char]) {
            max=counts[char];
            winner.push(char);
        }else if(max===counts[char]) {
            winner.push(char);
        };
    };
    result.textContent="一番多いのは"+winner.join(", ")+"で"+max+"個です";
});