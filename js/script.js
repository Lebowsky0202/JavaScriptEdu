'use strict';
// Объекты 
let Name = prompt("Как вас зовут", "Брюс Беннер");
let secCode = prompt("Код доступа", "");

function checkSec(name){
    name = Name;
    if (name === "Тор"){
        verifyThor(secCode);
    }else if (name === "Халк" || name === "Брюс Беннер"){
        verifyHulk(secCode);
    }else{
        alert("Доступ запрещен (Имя)");
    }
}

function verifyThor(securityCode){
    if(securityCode === "Златовласка"){
        alert("Доступ разрешен");
        alert("Здравствуйте! Златовласка");
    }
    else{
        alert("Доступ запрещен");
    }
}

function verifyHulk(securityCode){
    if(securityCode === "Брюс Беннер" || securityCode === "Могучий мститель"){
        alert("Доступ разрешен");
        alert("Здравствуйте! Могучий мститель");
    }
    else{
        alert("Доступ запрещен");
    }
}

let thor = {
    name: "Тор",
    age: 1500,
    secreetKey: "Златовласка",
};

let hulk = {
    name: "Брюс Беннер",
    age: 47,
    secreetKey: "Могучий мститель",
}

checkSec(Name);