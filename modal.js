const openBtn =document.getElementById("openBtn");
const modal =document.getElementById("modal");
const closeBtn =document.getElementById("closeBtn");

openBtn.addEventListener("click",()=> {
    modal.classList.add("open");
});

closeBtn.addEventListener("click",()=> {
    modal.classList.remove("open")
});