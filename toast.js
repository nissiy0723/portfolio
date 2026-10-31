const saveBtn=document.getElementById("saveBtn");
const toast=document.getElementById("toast");

saveBtn.addEventListener("click", ()=> {
    toast.classList.add("show");

    setTimeout(()=> {
        toast.classList.remove("show");

    },2000);
});