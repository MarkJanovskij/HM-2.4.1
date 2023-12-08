let expenses = [
    { [new Date(Date.parse('2023-01-01'))]: 2500 }, // January
    { [new Date(Date.parse('2023-02-01'))]: 6000 }, // February
    { [new Date(Date.parse('2023-03-01'))]: 7000 }, // March
    { [new Date(Date.parse('2023-04-01'))]: 6000 }, // April
    { [new Date(Date.parse('2023-05-01'))]: 3 }, // May
    { [new Date(Date.parse('2023-06-01'))]: 9 }, // June
    { [new Date(Date.parse('2023-07-01'))]: 700 }, // July
    { [new Date(Date.parse('2023-08-01'))]: 8000 }, // August
    { [new Date(Date.parse('2023-09-01'))]: 655 }, // September
    { [new Date(Date.parse('2023-10-01'))]: 5700 }, // October
    { [new Date(Date.parse('2023-11-01'))]: 340 }, // November
    { [new Date(Date.parse('2023-12-01'))]: 5390 }, // December
    { [new Date(Date.parse('2024-01-01'))]: 500 }, // January
    { [new Date(Date.parse('2024-02-01'))]: 1000 }, // February
    { [new Date(Date.parse('2024-03-01'))]: 90000 }, // March
    { [new Date(Date.parse('2024-04-01'))]: 80 }, // April
    { [new Date(Date.parse('2024-05-01'))]: 980 }, // May
    { [new Date(Date.parse('2024-06-01'))]: 9000 }, // June
    { [new Date(Date.parse('2024-07-01'))]: 10 }, // July
    { [new Date(Date.parse('2024-08-01'))]: 400 }, // August
    { [new Date(Date.parse('2024-09-01'))]: 3000 }, // September
    { [new Date(Date.parse('2024-10-01'))]: 250 }, // October
    { [new Date(Date.parse('2024-11-01'))]: 45000 }, // November
    { [new Date(Date.parse('2024-12-01'))]: 1200 }, // December
    { [new Date(Date.parse('2025-01-01'))]: 20 }, // January
    { [new Date(Date.parse('2025-02-01'))]: 200 }, // February
    { [new Date(Date.parse('2025-03-01'))]: 8900 }, // March
    { [new Date(Date.parse('2025-04-01'))]: 3300 }, // April
    { [new Date(Date.parse('2025-05-01'))]: 2300 }, // May
    { [new Date(Date.parse('2025-06-01'))]: 1009 }, // June
    { [new Date(Date.parse('2025-07-01'))]: 1200 }, // July
    { [new Date(Date.parse('2025-08-01'))]: 2000 }, // August
    { [new Date(Date.parse('2025-09-01'))]: 670 }, // September
    { [new Date(Date.parse('2025-10-01'))]: 900 }, // October
    { [new Date(Date.parse('2025-11-01'))]: 900 }, // November
    { [new Date(Date.parse('2025-12-01'))]: 7000 } // December
];

expenses.forEach(month => {
    for (let key in month) {
        let year = new Date(key).getFullYear();
        let monthName = new Date(key).toLocaleString('default', { month: 'long' });
        console.log(monthName + ' ' + year);
    }
});


