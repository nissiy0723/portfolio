const number = document.getElementById("number");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const reset = document.getElementById("reset");
let count = 0;

plus.addEventListener("click", () => {
count +=1;
    number.textContent = count;

    if(count === 0) {
        number.style.color = "black";
    }
    else if(count >= 1&& count < 50) {
        number.style.color = "green";
    }

else if(count >= 50 ){
    number.style.color = "red";
}

});
minus.addEventListener("click", () => {
   if(count > 0) {
        count -=1;
    }
    number.textContent = count;
    if(count === 0) {
        number.style.color = "black";
    }
    else if(count >= 1&& count < 50) {
        number.style.color = "green";
    }
    else if(count >= 50) {
        number.style.color = "red";
    }

});
reset.addEventListener("click", () => {
    count = 0;
    number.textContent = count;
    if(count === 0) {
        number.style.color = "black";
    }
});
