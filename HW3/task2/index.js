"use strict";
document.getElementById('button1').onclick = function(){
    location.href = "https://www.google.com/";
};
document.getElementById('button2').addEventListener("click", onButton2Click);
function onButton2Click(e){
    document.documentElement.innerHTML = '';
};