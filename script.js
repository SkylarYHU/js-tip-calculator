const btnEl = document.getElementById("calculate");
const billEl = document.getElementById("bill");
const tipEl = document.getElementById("tip");
const total = document.getElementById("total");

function calculateTotal(){
  const billValue = billEl.value;
  const tipValue = tipEl.value;
  const totalValue = billValue * (1 + tipValue / 100);
  total.innerText = `$${totalValue.toFixed(2)}`;
}

btnEl.addEventListener("click", calculateTotal)