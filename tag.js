const memo=document.getElementById("memo");
const tag=document.getElementById("tag");
const addBtn=document.getElementById("addBtn");
const tagFilter=document.getElementById("tagFilter");
const noteList=document.getElementById("noteList");

let notes=[];

function load() {
    notes=JSON.parse(localStorage.getItem("notes")) || [];}

    function save() {
        localStorage.setItem("notes", JSON.stringify(notes));
    }
let currentTag="all";


  
function updateFilterOption() {
    const tags = []
    notes.forEach((n)=> {
        if(n.tag && !tags.includes(n.tag)){
            tags.push(n.tag);
        }
    });
    tagFilter.innerHTML='<option value="all">すべて</option>';
    tags.forEach((tag)=> {
        const option=document.createElement("option");
        option.value=tag;
        option.textContent=tag;
        tagFilter.appendChild(option);
    });
    tagFilter.value=currentTag;
}
function render() {
noteList.innerHTML="";

let view=notes;
if(currentTag!=="all") {
    view=notes.filter((memo)=>memo.tag===currentTag)
};


view.forEach((memo)=> {
    const li=document.createElement("li")
    li.textContent=memo.text + " #"+ memo.tag+" ";

    const deleteBtn=document.createElement("button");
    deleteBtn.textContent="削除";
    deleteBtn.addEventListener("click",()=> {
        notes=notes.filter((n)=> n.id!==memo.id);
        save();
        updateFilterOption();
        render();
    });
    li.appendChild(deleteBtn);
    noteList.appendChild(li);

});

};
addBtn.addEventListener("click",()=> {
    const memoInput=memo.value.trim();
    const tagInput=tag.value.trim();

    if(memoInput==="") return;
   

    notes.push({
        id:Date.now(),
        text:memoInput,
        tag:tagInput
    });
    memo.value="";
    tag.value="";
    save();
    updateFilterOption();
    render();
});
tagFilter.addEventListener("change",()=> {
    currentTag=tagFilter.value;
    render();
});
load();
updateFilterOption();
render();