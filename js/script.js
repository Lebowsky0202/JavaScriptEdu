'use strict';

let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

const appData = {
    buget: money,
    timeData: time,
    expenses: {
        itemExpenses: total,
    },
    optionalExpenses: null,
    income: null,
    savings: false,
};


for(let i = 0; i < 2; i++){
    let a = prompt("Введите обязательную статью расходов: ", ""),
        b = prompt("Во сколько это обойдется");

    appData.expenses[a] = b;
}

alert(appData.buget / 30);

//Задание 3 курс Ивана Петриченко