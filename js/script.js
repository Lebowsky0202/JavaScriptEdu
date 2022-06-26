'use strict';

let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let itemExpenses = prompt("Введите обязательную статью расходов в этом месяце", "");
let total = prompt("Во сколько обойдется?", "");
itemExpenses = prompt("Введите обязательную статью расходов в этом месяце", "");
total = prompt("Во сколько обойдется?", "");


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

alert(`Ваш бюджет на день ${money / 30}`);

