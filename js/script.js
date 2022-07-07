'use strict';

let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

const appData = {
    buget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: null,
    income: null,
    savings: false,
};


for(let i = 0; i < 2; i++){
    let a = prompt("Введите обязательную статью расходов: ", ""),
        b = prompt("Во сколько это обойдется");

    if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50){
        console.log("Работает");
        appData.expenses[a] = b;
    }else{
        console.log("None");
    }
    
}

appData.moneyPerDay = appData.buget / 30;

alert(`Ежедневный доход составляет ${appData.moneyPerDay}`);

if (appData.moneyPerDay < 100){
    console.log("Минимальный уровень достатка");
}else if(appData.moneyPerDay < 10000 && appData.moneyPerDay > 100){
    console.log("Средний уровень достатка");
}else if(appData.moneyPerDay > 10000){
    console.log("Высокий уровень достатка");
}else{
    console.log("Ошибка");
}

//Задание 3 курс Ивана Петриченко