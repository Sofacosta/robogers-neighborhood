$(document).ready(function(event) {
  $("form#formInput").submit(function (event) {
    event.preventDefault();
    $("#result").show();
    const inputNumber = $("input#userNumber").val();
    let inputString = inputNumber.split("");  
    console.log(inputString);
    $("p").html(inputString);
  });
});