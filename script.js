'use strict';

let money = +prompt("Ваш бюджет на месяц?"),
 time = prompt("Введите дату в формате YYYY-MM-DD"),
 first = prompt("Введите обязательную статью расходов в этом месяце"),
 second = +prompt("Во сколько обойдется?");

var appData = {
  budget: money,
  timeData: time,
  expenses: {
    first : second
  },
  optionalExpenses: {},
  income: [],
  savings: false
};

alert("Budget for one day: " + appData.budget/30);




