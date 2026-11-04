const btn = document.getElementById("btn");
const result =document.getElementById("result");

btn.addEventListener("click",async()=> {
    result.textContent="読み込み中…";
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        result.textContent=data.slip.advice;

    }catch(error) {
        result.textContent="取得に失敗しました";
    }
});