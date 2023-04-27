const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-remaining");
const message = document.querySelector("#error-message");
const ChangeNotes = document.querySelector("#notes");
const notes = [2000, 500, 100, 20, 10, 5, 1];

checkBtn.addEventListener("click", function ManageCash() {
  hideMessage();
  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      calculateChange(amountToBeReturned);
    } else {
      showMessage("Do you want to wash some plates or what");
    }
  } else {
    showMessage("invalid bill amount");
  }
});

function calculateChange(amountToBeReturned) {
  for (let i = 0; i < notes.length; i++) {}
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerHTML = msg;
}
