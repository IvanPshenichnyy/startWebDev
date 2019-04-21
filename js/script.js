let money = prompt('Ваш бюджет на месяц?', ''),
 time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        question1 : prompt('Введите обязательную статью расходов в этом месяце', '') ,
        question2 : prompt('Во сколько обойдется?', '')
    },
    optionalExpenses: {},
    income: [],
    saving: false

};
    // alert(appData.expenses.question1);
    // alert(appData.expenses.question2);
    alert('Ваш бюджет на день ' + appData.budget / 30);