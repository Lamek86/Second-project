let money, time;

function start(){
    money = +prompt ("Ваш бюджет на месяц?","");
    time = prompt ("Введите дату в формате YYYY-MM-DD","2019-09-13");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?","");
    }
}
start();

let appData = {
    budget : money,
    timeData : time,
    Expenses : {},
    optionalExpenses : {} ,
    income : [],
    savings : true,
    detectDayBudget : function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        alert ("Бюджет на один день"+ "=" + appData.moneyPerDay + "руб.");
    },
    chooseExpenses : function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Ведите расходы за месяц", ""),
                b = prompt("Во сколько обойдётся",""); 
            if ((typeof (a))=== "string" && (typeof(a)) != null && (typeof(b)) != null
                && a != "" && b != "" && a.length < 30) {
                    console.log ("good");
                    appData.Expenses[a] = b;
                }
            else {                           
                    console.log ("bad result");
                    i--;
            }
        } 
    },
    detectLevel : function() {
        if (appData.moneyPerDay < 300) {
            alert ("Уровень достатка низкий");
        }
        else if (appData.moneyPerDay >= 300 && appData.moneyPerDay <= 2000) {
            alert ("Уровень достатка средний");
        }
        else if (appData.moneyPerDay > 2000) {
            alert ("Уровень достатка высокий!!!");
        }
        else (alert ("Уровень достатка ??????"));
    },
    chekSavings : function() {
        if (appData.savings == true) {
            let save = +prompt ("Какова сумма накоплений", ""),
                percent = +prompt ("Под какой процент","");
    
            appData.monthInnCome = (save/100/12*percent).toFixed(0);
            alert ("Доход с вашего депозита за месяц " + ":" + appData.monthInnCome + "руб.");
        }
    },
    chooseOptExpenses : function() {
        for (let i =1; i <=3; i++) {
            let questionOptExpenses = prompt ("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseInCome : function() {
       
     let items = prompt("Что принесет дополнительный доход? (перечислите через запятую)", "");
        
     if(typeof(items) == null || items == "" || typeof(items) != "string") {
         alert("Вы ничего не ввели \n про дополнительный заработок!!!");
       } else  {
                   appData.income = items.split(", ");
                   appData.income.push(prompt("Может хотите еще что то добавить?",""));
                   appData.income.sort();
               }

          appData.income.forEach(function(itemmassive, i) {
                 alert("Способы доп. заработка :"+ (i+1) + "-" + itemmassive)
             });
    }
};

for (let key in appData) {
    console.log ("Наша программа включает в себя такие данные \n     как :" + key + "-" + appData[key]);
    alert("Наша программа включает в себя такие данные \n     как :" + key + "-" + appData[key]);
}

