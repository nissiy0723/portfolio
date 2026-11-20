const Input=document.getElementById("textInput");
const addBtn=document.getElementById("addBtn");
const memo=document.getElementById("data");
const count=document.getElementById("count");
let data=[]

function save() {
    localStorage.setItem("data",JSON.stringify(data));
}

function load() {
    data=JSON.parse(localStorage.getItem("data"))||[];
}

function render() {
    memo.innerHTML="";

    let donecount=0


    data.forEach((d)=> {
         if(d.done===true){donecount++;
         };

        //チェック用ボタン
        const checkBtn=document.createElement("button");
        checkBtn.textContent=d.done ? "☑" : "☐";
        checkBtn.addEventListener("click",()=> {
            d.done=!d.done;
            save();
            render();
        });

        const span=document.createElement("span")
        span.textContent= " " + d.text + " ";
        const deleteBtn=document.createElement("button");
        deleteBtn.textContent="削除";
        deleteBtn.addEventListener("click",()=> {
            data=data.filter((data)=> data.id!==d.id);
            save();
            render();
        });
        
        const li=document.createElement("li");

      
      


        li.appendChild(checkBtn);
         li.appendChild(span);
        li.appendChild(deleteBtn);
        memo.appendChild(li);
        
    }) 
    count.textContent=donecount+ " / " + data.length;

};





addBtn.addEventListener("click",()=> {
    const text=Input.value;
    if(text==="")return;

    data.push({
        id:Date.now(),
        text:text,
        done:false
   });
   Input.value="";
   save();
   render();
}) ;
load();
render();