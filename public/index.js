const calculatorContainer = document.querySelector(".calculator-container");
const keysContainer = calculatorContainer.querySelector(".keys-container");

keysContainer.addEventListener("click", e => {
  if (e.target.matches(".button")) {
    const key = e.target;
    const action = key.dataset.action;
    if (!action) {
      console.log('number key');
    }
  }
});