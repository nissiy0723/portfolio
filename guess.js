const guessInput=document.getElementById("guessInput")
const guessBtn=document.getElementById("guessBtn")
const resetBtn=document.getElementById("resetBtn")
const message=document.getElementById("message")

let answer= Math.floor(Math.random() * 100) + 1;

guessBtn.addEventListener("click",()=>{
    const num= Number(guessInput.value);
    if(num < answer) {
        message.textContent ="もっと大きい";
        message.style.color="red";
    }else if(num > answer) {
        message.textContent = "もっと小さい";
        message.style.color = "green";
    }else {
        message.textContent ="正解";
        message.style.color ="blue";
    }

    
});
resetBtn.addEventListener("click",()=> {
    message.textContent="";
    answer= Math.floor(Math.random() * 100) + 1;
    guessInput.value ="";



})

