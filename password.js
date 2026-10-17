const generateBtn=document.getElementById("generateBtn");
const output=document.getElementById("output");
const lengthInput=document.getElementById("lengthInput")



const chars ="QAZWSXEDCRFVTGBYHNUJMIKOLPqazwsxedcrfvtgbyhnujmikolp1234567890";
generateBtn.addEventListener("click",()=>{
    const length =Number(lengthInput.value);
if(!length || length < 4 || length >32) {
    output.textContent = "4~32の数字を入力してください";
    return;
}
let password=""
for (let i = 0; i<length; i++) {
    const index =Math.floor(Math.random() * chars.length);
    password += chars[index];
}

output.textContent=password;
});