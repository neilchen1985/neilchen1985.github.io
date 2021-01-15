var played = false;

window.onload = function(){
  var triggerBtn = document.querySelector(".head_section .trigger button");
  triggerBtn.innerText = played ? '已經玩過囉！' : '我要玩！';
  triggerBtn.style.backgroundColor = played ? '#999999' : '#EB2E00';
};