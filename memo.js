const memoInput = document.getElementById("memoinput");
const addBtn = document.getElementById("addBtn");
const memoList = document.getElementById("memoList");
const message = document.getElementById("message");
function saveMemos() {
    const memos = [];
    const memoItems = memoList.querySelectorAll("li");
    memoItems.forEach((li) => {
        const span = li.querySelector("span");
        memos.push({
            text: span.textContent
    });
    });
    localStorage.setItem("memoList", JSON.stringify(memos));
}
function createMemo(text) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = text;
    li.appendChild(span);


    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "削除";

    deleteBtn.addEventListener("click", () => {
        li.remove();
        saveMemos();
    });

    li.appendChild(deleteBtn);
    memoList.appendChild(li);
}


  function loadList() {
  const saved = localStorage.getItem("memoList");
  if (!saved) return;

  const memos = JSON.parse(saved);
  memos.forEach((memo) => {
    createMemo(memo.text);
  });
};

addBtn.addEventListener("click", () => {
  const value = memoInput.value.trim();

  if (value === "") {
    message.textContent = "入力してください";
    return;
  }

  createMemo(value);
  saveMemos();
  memoInput.value = "";
});

loadList();
