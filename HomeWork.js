let money, time;
money = prompt ("Ваш бюджет на месяц?","500000");
time = prompt ("Введите дату в формате YYYY-MM-DD","2019-09-13");

let appData = {
    MoneyPerMonth : money,
    timeData : time,
    Expenses : {},
    optionalExpenses : {} ,
    income : {},
    savings : false
};

let a1 = prompt("Ведите расходы за месяц", "50000"),
    a2 = prompt("Во сколько обойдётся","40000");
    a3 = prompt("Ведите расходы за месяц", "50000"),
    a4 = prompt("Во сколько обойдётся","40000");

appData.Expenses.a1 = a2;
appData.Expenses.a3 = a4;

alert (appData.MoneyPerMonth / 30);