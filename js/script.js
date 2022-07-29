'use strict';

//Методы объекта this
// Каркулятор

let calculator = {
    a: 0,
    b: 0,
    read (){
        this.a = +prompt("Первое число");
        this.b = +prompt("Второе число");
    },

    sum (){
        return this.a + this.b;
    },

    mul (){
        return this.a * this.b;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());