// esta funcion es la cuenta atrás para el número de click
function updateClock() {
    document.querySelector('.countdown').innerHTML = countdownTotal;
    if(countdownTotal==0){
      console.log('Final');
    }else{
      countdownTotal-=1;
      setTimeout("updateClock()",1000);
    }
  }