const count=document.getElementById("count");
const start=document.getElementById("start");
const stop =document.getElementById("stop");
const reset=document.getElementById("reset");


let number=0;

let timerId=null;

start.addEventListener("click",()=> {
        if(timerId!==null)return;

        timerId=setInterval(()=> {
            number++;
            count.textContent=number;
            if(number>=100000) {
                clearInterval(timerId);
                timerId=null;
                count.textContent="上限に達しました";
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
    number=0;
    count.textContent=number;
})