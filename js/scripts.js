$(document).ready(function () {
  $("#formInput").submit(function (event) {
    event.preventDefault();
    $("#result").show();
    const inputNumber = parseInt ($("input#number").val());

    