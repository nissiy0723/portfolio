const start =document.getElementById("startBtn")
const stopBtn = document.getElementById("stopBtn")
const reset = document.getElementById("resetBtn")
const display= document.getElementById("display")
let seconds = 0;
let timerId=null;

function updateDisplay() {
    const m =Math.floor(seconds/60)
    const s =seconds % 60;
    display.textContent = m + ":" + String(s).padStart(2, "0");
};
start.addEventListener("click",()=> {
if (timerId !== null)  return;
timerId=setInterval(() => {
    seconds++;
    updateDisplay()
    //表示を更新
},1000);
});
stopBtn.addEventListener("click", ()=> {
    clearInterval(timerId);
    timerId=null;
});
reset.addEventListener("click", ()=> {
    clearInterval(timerId);
    timerId=null;
    seconds=0;
    updateDisplay()
});

