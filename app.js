const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-remaining");

checkBtn.addEventListener("click", function () {
  console.log(billAmount.value, cashGiven.value);
});
