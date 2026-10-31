const view = document.getElementById("view");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const page = document.getElementById("page");

const slides=["🍎","🍇","🍋","🍊"];
let current=0

function show() {
    view.textContent = slides[current];
    page.textContent = (current +1)+" / "+slides.length;
};
nextBtn.addEventListener("click", ()=> {
    current++;
    if(current >=slides.length)
        {current =0;
        }
    show();
});
prevBtn.addEventListener("click", ()=> {
    current--;
    if(current<0) {
        current=slides.length -1
        
        }
        show();
    });
show();