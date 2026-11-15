const search =document.getElementById("search");
const items = document.querySelectorAll("#list li")
const message =document.getElementById("message")

search.addEventListener("input", ()=> {
    const keybord=search.value.toLowerCase();
    let visibleCount=0

    items.forEach((li)=> {
        if(li.textContent.toLowerCase().includes(keybord)) {
            li.style.display ="";
            visibleCount++
        }else {
            li.style.display ="none";
         
        }
    });
    if(visibleCount===0) {
        message.textContent="見つかりません"
    }else {
        message.textContent="";
    }
});