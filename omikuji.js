const drawBtn = document.getElementById("drawBtn");
const result = document.getElementById("result");

const fortunes = ["大吉","中吉","小吉","吉","末吉","凶","大凶"];

drawBtn.addEventListener("click",()=> {
const index= Math.floor(Math.random() * fortunes.length);
result.textContent=fortunes[index];

})