//var name1 = prompt(Введите имя);

//var inp = prompt(Введите вместительность);
var cashNew = 0;
var debitCash = 0;
var debitCash2 = 0;
var macdonalds = {  
           
      size: 300 ,
      morning: 50,
      day: 200 ,
      even: 250 , 
      averagePrice : 300,
      averageCredit : 200,

            };




 function event() {
     
     macdonalds.morning = macdonalds.day * 0.9 + macdonalds.morning;
     
     cashNew = macdonalds.morning * macdonalds.averagePrice;
     cashNew = cashNew + macdonalds.day *  0.9 * macdonalds.averagePrice/2 + macdonalds.day * 0.1 * macdonalds.averagePrice;
     
     debitCash = cashNew - (macdonalds.morning + macdonalds.day) * macdonalds.averageCredit;
     
     debitCash2 = ((macdonalds.morning + macdonalds.day) * macdonalds.averagePrice) - ((macdonalds.morning + macdonalds.day) * macdonalds.averageCredit);
 }

event();
console.log(debitCash);
console.log(debitCash2);



