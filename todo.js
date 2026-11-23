const textInput=document.getElementById("textInput");
const addBtn=document.getElementById("addBtn");
const message=document.getElementById("message");
const list=document.getElementById("list");
const all=document.getElementById("all");
const m=document.getElementById("m");
const k=document.getElementById("k");

let items=[];

function save() {
    localStorage.setItem("textitems",JSON.stringify(items));
};

function load() {
    items=JSON.parse(localStorage.getItem("textitems"))||[];
};

let currentFilter="all";

function render(){
    list.innerHTML="";

    let view=items;
    if(currentFilter==="active"){
        view=items.filter((item)=> !item.done);
    }else if(currentFilter==="done") {
        view=items.filter((item)=> item.done);
    };

    view.forEach((item)=> {
        const li=document.createElement("li");
        const span=document.createElement("span");
        span.textContent=item.text;
        if(item.done){
        span.style.textDecoration="line-through";
        span.style.color="gray";
        };

        const deleteBtn=document.createElement("button");
        deleteBtn.textContent="削除";
        deleteBtn.addEventListener("click",()=> {
            items=items.filter((x) => x.id !==item.id);
            message.textContent="削除しました";
            setTimeout(()=> {
                message.textContent="";
            },2000);
            save();
              
            render();
        });

   
         const doneBtn = document.createElement("button");
        doneBtn.textContent = item.done ? "戻す" : "完了";
        doneBtn.addEventListener("click", () => {
        item.done=!item.done;
      

    save();
    render();
  }); 
  li.appendChild(span);
  li.appendChild(deleteBtn);
  li.appendChild(doneBtn);
  list.appendChild(li);
});
};



addBtn.addEventListener("click",()=> {
    const text=textInput.value.trim();
    if(text===""){
        message.textContent="文字を入力してください";
        return;
    }

    items.push({
         id: Date.now(),
         text:text,
         done:false
    });
    textInput.value="";
    save();
    render();
});

all.addEventListener("click",()=> {
    currentFilter="all";
    render();
});
m.addEventListener("click",()=> {
    currentFilter="active";
    render();
});
k.addEventListener("click",()=> {
    currentFilter="done";
    render();
});
load();
render();