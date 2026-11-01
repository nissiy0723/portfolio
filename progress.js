const bar = document.getElementById("bar");
const label = document.getElementById("label");
const minus = document.getElementById("minusBtn");
const plus= document.getElementById("plusBtn");
const reset = document.getElementById("resetBtn");

let percent=0

function update() {
    if(percent<0)percent=0;
    if(percent>100)percent=100;
    bar.style.width = percent+"%";
    label.textContent=percent+"%";
};
plus.addEventListener("click",()=> {
  percent+=10;

    update();
  
});

minus.addEventListener("click",()=> {
      percent-=10;
    update();
  
});

reset.addEventListener("click",()=> {
     percent=0;
    update();
   
});