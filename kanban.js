const title = document.getElementById("title");
const addBtn=document.getElementById("addBtn");
const todo=document.getElementById("todoList");
const doing=document.getElementById("doingList");
const done=document.getElementById("doneList");

let tasks=[];

function render() {
todo.innerHTML="";
doing.innerHTML="";
done.innerHTML="";
tasks.forEach((task)=> {
const li=document.createElement("li");
li.textContent=task.title + " ";

if(task.status !== "done") {
    const nextBtn=document.createElement("button");
    nextBtn.textContent="→";
    nextBtn.addEventListener("click", ()=> {
        if(task.status==="todo") task.status="doing";
        else if(task.status==="doing") task.status="done";
        render();
    });
    li.appendChild(nextBtn);
}
if(task.status==="todo") {
    todo.appendChild(li);
}else if (task.status==="doing") {
    doing.appendChild(li);
} else {
    done.appendChild(li);
}
});
}

addBtn.addEventListener("click",()=> {
    const titleInput=title.value.trim();
    if(titleInput==="") return;

    tasks.push({
        id: Date.now(),
        title:titleInput,
        status:"todo"
    });
    title.value="";
    render();
});