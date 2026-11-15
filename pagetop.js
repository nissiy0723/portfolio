const pageTop=document.getElementById("pageTop");

window.addEventListener("scroll",()=> {
    if(window.scrollY > 200) {
        pageTop.classList.add("show");
    }else {
        pageTop.classList.remove("show");
    };
});

pageTop.addEventListener("click", ()=> {
    window.scrollTo({top: 0, behavior: "smooth"});
    
});