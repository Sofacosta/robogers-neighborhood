$(document).ready(function(event) {
  $("form#formInput").submit(function (event) {
    event.preventDefault();
    const inputNumber = $("input#userNumber").val();
    let numberArray = [];

    for(let i = 0; i <= inputNumber; i++) {
      numberArray.push(i);
    }

    const outputArray = numberArray.map(function(numberInstance) {
      if (numberInstance.toString().includes('3') ) {
        return "Won't you be my neighbor?, ";
      }

      if (numberInstance.toString().includes('2')) {
        return "Boop!, ";
      }

      if (numberInstance.toString().includes('1')) {
        return "Beep!, ";
      }

      return numberInstance + ', ';
    })

    $("#result").html(outputArray);
  });
});