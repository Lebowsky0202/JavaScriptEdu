'use strict';

// Ввод пароля Администратора 
// Курс learn.javascript

let welk = prompt("Кто ты воин", "");


if(welk === "Админ"){
    let pass = prompt("Пароль", "");
    if (pass === "Я Главный"){
        alert("Здравствуйте!");
    }else if(pass == null){
        alert("Отменено");
    }else if(pass !== "Я Главный"){
        alert("Неверный пароль!");
    }
}else if(welk == null){
    alert("Отменено");
}else if(welk !== "Админ"){
    alert("Я не знаю кто ты");
}