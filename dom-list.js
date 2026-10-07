const textInput = document.getElementById("textInput");
const addBtn = document.getElementById("addBtn");
const message = document.getElementById("message");
const list = document.getElementById("list");

function saveList() {
  const items = [];
  const listItems = list.querySelectorAll("li");

  listItems.forEach((li) => {
    const span = li.querySelector("span");
    items.push({
      text: span.textContent,
      done: span.style.textDecoration === "line-through"
    });
  });

  localStorage.setItem("todoList", JSON.stringify(items));
}

function createItem(text, done) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;
  if (done) {
    span.style.textDecoration = "line-through";
    span.style.color = "gray";
  }

  const doneBtn = document.createElement("button");
  doneBtn.textContent = done ? "戻す" : "完了";
  doneBtn.addEventListener("click", () => {
    if (span.style.textDecoration === "line-through") {
      span.style.textDecoration = "none";
      doneBtn.textContent = "完了";
      span.style.color = "";
      
    } else {
      span.style.textDecoration = "line-through";
      doneBtn.textContent = "戻す";
      span.style.color = "gray";
    }
    saveList();
  });
  doneBtn.id = "doneBtn";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "削除";
  deleteBtn.addEventListener("click", () => {
    li.remove();
    saveList();
  });
  deleteBtn.id = "deleteBtn";

  li.appendChild(span);
  li.appendChild(doneBtn);
  li.appendChild(deleteBtn);
  list.appendChild(li);
}

function loadList() {
  const saved = localStorage.getItem("todoList");
  if (!saved) return;

  const items = JSON.parse(saved);
  items.forEach((item) => {
    createItem(item.text, item.done);
  });
}

addBtn.addEventListener("click", () => {
  const value = textInput.value.trim();

  if (value === "") {
    message.textContent = "入力してください";
    return;
  }

  message.textContent = "";
  createItem(value, false);
  saveList();
  textInput.value = "";
});

loadList();