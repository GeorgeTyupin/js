/*/var c = prompt('выспался или не выспался');
var b ;
if ( c == 'выспался')
{
    alert('пей кофе');
}
else
{
    b = prompt('Тебе не надоело кофе? Может какао?');
    
    if ( b == 'нет') 
     {
             alert('пей кофе');      
        }
    
    else
   {   
       alert('пей какао'); 
}
    
}*/
var day = 24;
var school = 8;
//var vayToSchool = 1;
var Dz = 2 ;
//var game = 5;
//var sleep = 7;


 
var school1 = prompt('нужно идти в школу?');
if ( school == 'да')
    { 
       
var school2 = 8;

    var study = school2+Dz;
       day = day-study;
    }
else
{
    var school2 = 0;
     var study = school2+Dz;
           day = day-study;

    
}

var hobby  = prompt('сколько времени потратишь на хобби?');
var game = prompt('сколько времени потратишь на игры?');
var sleep = prompt('сколько времени потратишь на coн?');




if (sleep < 5)
{ 
var sleep2 = prompt('Ты уверен , что ты выспишься?');
    
    if(sleep2== 'да')
    {day= day - hobby - game - sleep;}
    else
    { var sleep = prompt('сколько времени потратишь на coн?');   }
}
else
    
{day= day - hobby - game - sleep;}





//day= day - hobby - game - sleep;




if (game > 10)
{
    var game2 = prompt('Ты уверен , хочешь подолжить играть?');
    
    if(game2== 'да')
   {day= day - hobby - game - sleep;}
    else
    { var game = prompt('сколько времени потратишь на игры?');   }
}
  else    
{day= day - hobby - game - sleep;}  




 if (day >= 0)
     {
        alert( 'Молодец , ты умеешь планировать день'   ); 
     }
else 
{
    alert( 'Кажеться в твоих сутках больше 24 часов');
}