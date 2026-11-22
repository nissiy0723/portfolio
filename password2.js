const Input=document.getElementById("Input");
const result=document.getElementById("result")

Input.addEventListener("input",()=> {
    const text=Input.value;
    const length=text.length;
    const hasNumber=/\d/.test(text);  //数字があればtrue

    let strength="弱い"

   
    if(length===0) {
    strength="-";
    }else if(length>=1&&length<6) {
    strength="弱い";
    }else if(length>=8 &&hasNumber) {
    strength="強い";
    } else if(length>=6) {
    strength="普通";
    }else {
    strength="普通";
    };
    result.textContent=strength;
});