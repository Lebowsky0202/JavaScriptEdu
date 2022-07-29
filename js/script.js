'use strict';
let money, time;

function start(){
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

  while (isNaN(money) || money == "" || money == null){
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}

start();

let appData = {
  buget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
};


function chooseExp(){
  for (let i = 0; i < 2; i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
  
    if( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50){
      console.log("Dpne");
      appData.expenses[a] = b;
    }else{
      i--;
    }
  }
}

chooseExp();

function detectDayBudget(){
  appData.moneyPerDay = (appData.buget / 30).toFixed();
  alert("Ежедневный бюджет " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel(){
  if(appData.moneyPerDay < 100){
    console.log("Мин ур");
  }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log("Сред ур");
  }else if(appData.moneyPerDay > 2000){
    console.log("Выс ур");
  }else{
    console.log("Err");
  }
}
detectLevel();

function checkSavings(){
  if (appData.savings == true){
    let save = +prompt("Сколько у вас денег на депозите?", ""),
        percent = +prompt("Какой процент", "");

    appData.monthIncome = save / 100 / 12 * percent;

    alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
  }
}

checkSavings();

function chooseOptExpenses(){
  for (let i = 0; i < 3; i++){
    let exp = prompt("Статья необезательных расходов", "");

    appData.optionalExpenses[i+1] = exp;
  }
}
chooseOptExpenses();