$(document).ready(function(event) {
  $("form#formInput").submit(function (event) {
    event.preventDefault();
    $("#result").show();
    const inputNumber = $("input#userNumber").val();
    let inputString = inputNumber.split("");  
    const number1 = ["1"];
    const number2 = ["2"];
    const number3 = ["3"];
    for (let i= 0; i < inputString.length; i += 1)
    if (number1.includes(inputString[i])) {
      inputString[i] = "Beep!";
    }

    for (let i= 0; i < inputString.length; i += 1)
    if (number2.includes(inputString[i])) {
      inputString[i] = "Boop!";
    }

    for (let i= 0; i < inputString.length; i += 1)
    if (number3.includes(inputString[i])) {
      inputString[i] = "Won't you be my neighbor?";
    }

    $("p").html(inputString);
  });
});