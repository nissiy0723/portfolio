const btn =document.getElementById("btn");
const list=document.getElementById("list");
const statusEl = document.getElementById("status");

btn.addEventListener("click",async()=> {
    statusEl.textContent="読み込み中…";
    list.innerHTML="";
    btn.disabled=true;
    try {
        const response =await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        const data=await response.json();
        data.forEach((post)=> {
            const li =document.createElement("li");
            li.textContent=post.title;
            list.appendChild(li);
            
        });
        btn.disabled=false;
        statusEl.textContent="";
    }catch(error) {
        statusEl.textContent="取得に失敗しました";
        btn.disabled=false;
    };
    
    
});