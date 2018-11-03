function process() {

  var time = document.Table.listTimeName.value;
  var persons = document.Table.listPersonsName.value;
  document.Table.field.value = " Стол на " +persons + " в " + time ;

}

var t=[0,0,0];

function countTime() {

  
  disabledButton(t)
  if( document.Table.listTimeName.value  =="17:00 - 19:00") {
    t[0]++;
  } else if( document.Table.listTimeName.value == "19:00 - 21:00") {
    t[1]++;
  } else { 
    t[2]++;
        }

        console.log( t);
}



function disabledButton(count) {

for ( var i  = 0; i < count.length; i++) {
  if( count > 4) {
    document.getElementById('add-button').disabled= true;
  } else { 
    document.getElementById('add-button').disabled= false; 
  }
}

  

}