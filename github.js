const username =document.getElementById("username");
const btn=document.getElementById("btn");
const statusEl=document.getElementById("status");
const avatar=document.getElementById("avatar");
const info =document.getElementById("info");

btn.addEventListener("click",async()=> {
     const user=username.value.trim();
  if(user===""){
    statusEl.textContent="入力してください";
    avatar.style.display="none";
    info.textContent="";
    return;
    };

    statusEl.textContent="読み込み中…";
    avatar.style.display="none";
    info.textContent="";
    btn.disabled=true;
  
   
    try{
    const response=await fetch("https://api.github.com/users/" +user);
    if(!response.ok) {
        throw new Error("ユーザーが見つかりません");
        }
        const data=await response.json();
        avatar.src=data.avatar_url;
        avatar.style.display="block";
        info.textContent=data.login + " / 公開リポジトリ: " + data.public_repos;
        statusEl.textContent="";
    }catch(error){
        statusEl.textContent="取得に失敗しました(ユーザーが存在しない可能性があります)";
        avatar.style.display="none";
        info.textContent="";

    }finally{
        btn.disabled=false;
    }
});