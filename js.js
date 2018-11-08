function process() {
  


  count();
  checking();
  



 

   
}


function checking() {

  var time = document.Table.listTimeName.value;
  var persons = +document.getElementById('add-input').value;
  var checks = document.getElementsByClassName('checkbox');
  if( checks[0].checked) { 
    document.Table.field.value = "В " + time + " Столик на " + persons +" быстрый ужин";
  } else {
    document.Table.field.value = "В " + time + " Столик на " + persons;
  }
}

function count() {

  var counter1_19 = 0;
  var counter2_21 = 0;

  var checks = document.getElementsByClassName('checkbox');
  var persons = +document.getElementById('add-input').value;
  var time = document.Table.listTimeName.value;

  if( time =="19:00 - 21:00" ) {
    if( persons <= 4) {
      if ( checks[0].checked ){
        counter1_19 = counterOne_19();
      } else {
        counter1_19 = counterOne_19();
        counter1_19 = counterOne_19();
      }
    } else {
     if ( checks[0].checked ){
        counter1_19 = counterOne_19();
        counter1_19 = counterOne_19();
      } else {
        counter1_19 = counterOne_19();
        counter1_19 = counterOne_19();
        counter1_19 = counterOne_19();
        counter1_19 = counterOne_19();
      } 
    }
   

    console.log( "counter1 = " +counter1_19 );
    (  counter1_19 > 8  ) ? alert( "Свободных столиков нет") :
    alert(" Заказ может быть оформлен");
  } else { 
    if( persons <= 4) {
      if ( checks[0].checked ){
        counter2_21 = counterOne_21();
      } else {
        counter2_21 = counterOne_21();
        counter2_21 = counterOne_21();
      }
    } else {
     if ( checks[0].checked ){
        counter2_21 = counterOne_21();
        counter2_21 = counterOne_21();
      } else {
        counter2_21 = counterOne_21();
        counter2_21 = counterOne_21();
        counter2_21 = counterOne_21();
        counter2_21 = counterOne_21();
      } 
    }
   

    console.log( "counter2 = " +counter2_21 );
    (  counter2_21 > 8  ) ? alert( "Свободных столиков нет") :
    alert(" Заказ может быть оформлен");

  }

 
  

}




function makeCounter1() {
  var currentCount = 0;
  return function() {
      return ++currentCount;
  }
};

function makeCounter2() {
  var currentCount = 0;
  return function() {
      return ++currentCount,++currentCount;
  }
};



var counterOne_19 = makeCounter1();
var counterOne_21 = makeCounter1();
