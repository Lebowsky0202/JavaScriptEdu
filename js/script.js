'use strict';

// Функций

// Первый вариант
// function checkAge(age) {
//     age = age > 18 ?  true : confirm('Родители разрешили?');
//     return age;
// }

// Второй вариант
// function checkAge(age) {
//     age = age > 18 || confirm('Родители разрешили?');
//     return age;
// }

// alert(checkAge(10));

//Lesson 2\

// function min(a, b){
//     return a < b ? a : b;
// }

// console.log(min(3, -1));

// lesson 3

function pow(x, n){
    let y = x;
    for(let i = 1; i < n; i++){
        x = x * y;
    }
    return x;
}

let x = +prompt("Введи значение x", "");
let n = +prompt("Введи значение n", "");

alert(`${x} в степени ${n} будет ${pow(x, n)}`);