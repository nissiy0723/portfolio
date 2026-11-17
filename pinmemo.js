const memo = document.getElementById("memo");
const addBtn=document.getElementById("addBtn");
const memoList=document.getElementById("memoList");

let notes=[];

function load() {
    notes=JSON.parse(localStorage.getItem("notes")) || [];}

    function save() {
        localStorage.setItem("notes", JSON.stringify(notes));
    }




function render() {
    memoList.innerHTML="";


    const sortedNotes = [...notes].sort((a, b) => {
        return b.pinned - a.pinned;
    });

    sortedNotes.forEach((memo) => {
    const li =document.createElement("li");
    const span=document.createElement("span");
    if(memo.pinned){
    span.textContent="📌 "+memo.text;
    }else {
           span.textContent=memo.text;
    };
    const pinBtn=document.createElement("button");
    pinBtn.textContent=memo.pinned ? "ピン解除" : "ピン";
    pinBtn.addEventListener("click",()=> {
  memo.pinned = !memo.pinned;
  save();
    render();
    });
    const deleteBtn=document.createElement("button");
    deleteBtn.textContent="削除";
    deleteBtn.addEventListener("click",()=> {
         notes = notes.filter((note) => note.id !== memo.id);
         save();
         render();
    });
   
    li.appendChild(span);
        li.appendChild(pinBtn);
        li.appendChild(deleteBtn);
    memoList.appendChild(li);
  });




};

addBtn.addEventListener("click",()=> {
    const memoInput=memo.value.trim();
    if(memoInput==="")return;
    notes.push({
          id: Date.now(),
          text:memoInput,
          pinned:false


    });
memo.value="";
save();
render();
});
 
load();
render();