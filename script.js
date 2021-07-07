let bill = document.querySelector(".bill");
let tipPercentage = document.getElementById("tip-percentage");
let people = document.querySelector(".people");
let calcTip = document.querySelector(".calculate-tip");
let finalTip = document.querySelector(".final-tip");
let hideButton = function () {
  calcTip.classList.add("hidden");
};
calcTip.addEventListener("click", function () {
  let tipCalc = function (bill, percentage) {
    return (bill / 100) * percentage;
  };
  //   If values are empty
  if (!bill.value) {
    alert("Please enter bill");
  } else if (!tipPercentage.value) {
    alert("Enter tip");
  } else if (!people.value) {
    alert("Please enter people");
  }
  //   If values are given
  if (bill.value && tipPercentage.value && people.value) {
    if (people.value < 0) {
      alert("People cant be in negative number");
    } else if (people.value < 2) {
      hideButton();
      finalTip.classList.remove("hidden");
      finalTip.innerHTML = `Tip is, ${Math.floor(
        tipCalc(bill.value, tipPercentage.value)
      )}$`;
    } else if (people.value > 1) {
      hideButton();
      finalTip.classList.remove("hidden");
      finalTip.innerHTML = `Tip is, ${Math.floor(
        tipCalc(bill.value, tipPercentage.value) / 2
      )}$ for each`;
    }
  }
});
