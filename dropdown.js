const dropdown=document.getElementById("dropdown");
const menuBtn=document.getElementById("menuBtn");
const menu=document.getElementById("menu");

menuBtn.addEventListener("click",(e)=> {
    e.stopPropagation();
    menu.classList.toggle("open");

});
document.addEventListener("click",()=> {
    menu.classList.remove("open");
});