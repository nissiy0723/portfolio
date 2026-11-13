const title = document.getElementById("title");
const amount=document.getElementById("amount");
const addBtn=document.getElementById("addBtn");
const list=document.getElementById("list");
const total=document.getElementById("total");
const type=document.getElementById("type");
const filterAll=document.getElementById("filterAll");
const filterIncome = document.getElementById("filterIncome");
const filterExpense=document.getElementById("filterExpense");
let items=[];

function load() {
    items=JSON.parse(localStorage.getItem("moneyItems")) || []
};

function save() {
localStorage.setItem("moneyItems",JSON.stringify(items))
};

let filter="all";

function render(){
    list.innerHTML="";

    let view=items;
    if(filter==="income") {
        view=items.filter((item)=> item.type==="income");
    }else if(filter==="expense") {
        view=items.filter((item)=> item.type==="expense");
    }

    

    view.forEach((item)=> {
        const li =document.createElement("li");
        const label = item.type === "income" ? "収入" : "支出";
        const sign = item.type === "income" ? "+" : "-";

        li.textContent=label+ " " + item.title + " " + sign +  item.amount +" 円";

        const deleteBtn=document.createElement("button");
        deleteBtn.textContent="削除";
        deleteBtn.addEventListener("click", ()=> {
            items=items.filter((x) => x.id !==item.id);
            
            save();
            render();
            
        });
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
    let sum=0;
    items.forEach((item)=> {
        if(item.type==="income") {
            sum+=item.amount;
        }else {
            sum-=item.amount;
        }
    });
    total.textContent=sum;
};


load();
render();


addBtn.addEventListener("click", ()=> {
    const typeInput=type.value;
    const titles=title.value.trim();
    const money=Number(amount.value);
    if(titles===""||money<=0) {
        return;
    };
    items.push({  
        id: Date.now(),
        type: typeInput,
        title: titles,
        amount: money});

   title.value="";
    amount.value="";
   
    
    save()
    render();
});

filterAll.addEventListener("click",()=> {
    filter = "all";
    render();
});
filterIncome.addEventListener("click",()=> {
    filter="income";
    render();
});
filterExpense.addEventListener("click", ()=> {
   filter="expense";
    render();
});