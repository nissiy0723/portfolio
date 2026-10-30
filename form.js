const nameInput=document.getElementById("name");
const emailInput=document.getElementById("email");
const submit=document.getElementById("submitBtn");
const message=document.getElementById("message");

submit.addEventListener("click", ()=> {
const nameValue=nameInput.value.trim();
const emailValue=emailInput.value.trim();

if(nameValue==="") {
message.textContent="入力してください";
message.style.color="red";
return;
};
if(emailValue==="") {
    message.textContent="入力してください";
    message.style.color="red";
    return;
};

if(!emailValue.includes("@")) {
      message.textContent="入力してください";
    message.style.color="red";
    return;
}

message.style.color=""
message.textContent="送信しました！";
nameInput.value="";
emailInput.value="";
});
