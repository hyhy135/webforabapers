"use strict";
function nameDisplay(){
    name="";
    name = prompt("Enter a name please");
    document.getElementById('inputName').value = name;
    let matches = name.match(/\d+/g);
    console.log(matches);
    if (matches != null) {
        let aName = name.split("");
        for (let i = 0; i< aName.length;i++){
            if(i % 2 === 0){
                aName[i] = aName[i].toUpperCase();
            }
            else{
                aName[i] = aName[i].toLowerCase();
            }
        }
        document.getElementById('nameBox').value = aName.join("");
    }
    else{
        document.getElementById('nameBox').value = name.split("").reverse().join("");
    }
};
 window.onload = nameDisplay();