const question =document.querySelectorAll(".question");

question.forEach((btn)=> {
    btn.addEventListener("click", ()=> {
        const item =btn.parentElement;  //親の　.item
        item.classList.toggle("open");
    });
});