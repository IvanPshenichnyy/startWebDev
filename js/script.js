var money = prompt('Ваш бюджет на месяц?', ''),
 time = prompt('Введите дату в формате YYYY-MM-DD', ''),
 appData = {
    budget: money,
    timeData: time,
    expenses: {
        'Введите обязательную статью расходов в этом месяце' : 'Во сколько обойдется?'
    },
    optionalExpenses: {},
    income: [],
    saving: false

};
ss
    alert('Ваш бюджет на день ' + appData.budget / 30);