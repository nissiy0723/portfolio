const textInput=document.getElementById("textInput");
const btn=document.getElementById("btn")
const result=document.getElementById("result");

btn.addEventListener("click",()=> {
    const text=textInput.value;
    const count={};
for(let i=0;i<text.length;i++) {
    const char=text[i];

    if (!count[char]) {
            count[char] = 1;
        } else {
            count[char]++;
        }
    }

    result.textContent = JSON.stringify(count);
});

