const darkmode=document.getElementById("darkmode");

darkmode.addEventListener("click",()=> {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        darkmode.textContent="ライトモード☽";
    } else{
        darkmode.textContent="ダークモード☽";
    };
    
});