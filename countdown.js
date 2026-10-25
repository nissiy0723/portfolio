const start = document.getElementById("start");
const stop = document.getElementById("stop");
const secoundInput = document.getElementById("secoundInput");
const display= document.getElementById("display")

let remaining = 0;
let timerId=null;

start.addEventListener("click",()=> {
   if(timerId !==null)return;
   if(remaining===0){
    remaining=Number(secoundInput.value);
    };
    if(!remaining || remaining<1) {
        display.textContent="1以上の数字を入力してください";
        return;
    };
    display.textContent=remaining;

    timerId =setInterval(()=> {
        remaining--;
        display.textContent=remaining;

        if(remaining===0) {
            clearInterval(timerId);
            timerId=null;
            display.textContent="終了!"
        };
    },1000);
});

stop.addEventListener("click", ()=> {
    clearInterval(timerId);
    timerId=null;
});
