const stars = document.querySelectorAll('.star');
const score = document.getElementById("score");

stars.forEach((star)=> {
    star.addEventListener("click", ()=> {
        const value=Number(star.dataset.value);
        score.textContent = value;

        stars.forEach((s)=> {
            if(Number(s.dataset.value)<= value){
            s.classList.add("active");
        } else {
            s.classList.remove("active");

        };
    });
    });
});