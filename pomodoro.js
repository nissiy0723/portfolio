const display=document.getElementById("display");
const start=document.getElementById("start");
const stop=document.getElementById("stop");
const reset=document.getElementById("reset");

let remaining=25*60;
let timerId=null;

function updateDisplay() {
    const m =Math.floor(remaining/60)
    const s =remaining % 60;
    display.textContent = m + ":" + String(s).padStart(2, "0");
};

start.addEventListener("click", ()=> {
if(timerId !==null)return;

timerId=setInterval(()=> {
  
    remaining--;
    updateDisplay();

    if(remaining<=0) {
        clearInterval(timerId);
        timerId=null;
        display.textContent="終了";
    };

},1000);


    
});
stop.addEventListener("click",()=> {
   clearInterval(timerId);
   timerId=null;
});
reset.addEventListener("click",()=> {
    clearInterval(timerId);
    timerId=null;
    remaining=25*60;
    updateDisplay();
});