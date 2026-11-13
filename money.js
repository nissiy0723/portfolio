const title = document.getElementById("title");
const amount=document.getElementById("amount");
const addBtn=document.getElementById("addBtn");
const list=document.getElementById("list");
const total=document.getElementById("total");


let items=[];

function load() {
    items=JSON.parse(localStorage.getItem("moneyItems")) || []
};

function save() {
localStorage.setItem("moneyItems",JSON.stringify(items))
};


function render(){
    list.innerHTML="";

    let sum=0;

    items.forEach((item,index)=> {
        const li =document.createElement("li");
        li.textContent=item.title + " " + item.amount +" 円";

        const deleteBtn=document.createElement("button");
        deleteBtn.textContent="削除";
        deleteBtn.addEventListener("click", ()=> {
            items.splice(index,1);
            
            render();
            save()
        });
        li.appendChild(deleteBtn);
        list.appendChild(li);

        sum+=item.amount;

    });
    total.textContent=sum;
}

load();
render();
addBtn.addEventListener("click", ()=> {
    const titles=title.value.trim();
    const money=Number(amount.value);
    if(titles===""||money<=0) {
        return;
    };
    items.push({ title: titles,amount: money});

   title.value="";
    amount.value="";
   
    render();
    save()

});
