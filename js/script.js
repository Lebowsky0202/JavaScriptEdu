'use strict';


// Циклы: вывод четных чисел

for (let i = 2; i <= 10; i++){
    if (i % 2) continue;
    alert(i); 
}

// Переписать цикл for ниже на while
for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
}

let i = 0;

while(i < 3){
    alert( `number ${i}!` );
    i++;
}

//Повторять цикл пока ввод неверен

while(true){
    let number = prompt("ввести число, большее 100", "");

    if (number > 100 || number == null){
        alert("Хорошо");
        break;
    }

    alert("Неверно, попробуй еще разок");
}