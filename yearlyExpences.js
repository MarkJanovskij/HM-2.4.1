// Работаем с массивом данных с расходами за 12 месяцев - yearlyExpences.


// Необходимо создать функцию, содержащую расчет суммы затрат, которые даны в массиве - в расчет берутся суммы только выше 1000. Расчет производится только для одного массива yearlyExpences.

// Создать тестовую функцию, которая будет проверять, что расчет суммы расходов производится верно. Проверить расчет на данных тестовых объектах (используйте forEach()):


// let expencesExamples = [
//     { yearlyExpences: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390] },
//     { yearlyExpences: [500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200] },
//     { yearlyExpences: [20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000] },
//    ];

   
// let sum =0;
//    expencesExamples.forEach(expence => {
//     expence.yearlyExpences.forEach (amount =>{
//         sum+= amount;
//     });
    
//    });
//    console.log(sum)
let expencesExamples = [
    { yearlyExpences: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390] },
    { yearlyExpences: [500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200] },
    { yearlyExpences: [20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000] },
   ];

   
   let sum = 0;
   expencesExamples.forEach(expense => {
       expense.yearlyExpences.forEach(amount => {
           if (amount > 1000) {
               sum += amount;
           }
       });
   });
   console.log(sum);



// let yearlyExpences = [20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000];
// let sum = 0;
// yearlyExpences.forEach(amount => {
//     if (amount > 1000) {
//         sum += amount;
//     }
// });
// console.log(sum); 