
const buttons =document.querySelectorAll(".tab-btn");
const panel=document.querySelectorAll(".panel");

buttons.forEach((btn)=> {
    btn.addEventListener("click",()=> {
        buttons.forEach((b)=> b.classList.remove("active"));
        panel.forEach((p)=> p.classList.remove("active"));

        btn.classList.add("active");
        const id= btn.dataset.tab;
        document.getElementById(id).classList.add("active");
    });
});