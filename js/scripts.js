$(document).ready(function(event) {
  $("form#formInput").submit(function (event) {
    event.preventDefault();
    $("#result").show();
    const inputNumber = parseInt($("input#userNumber").val());
    console.log(inputNumber);
    //let inputString = inputNumber.split("");
  });
});