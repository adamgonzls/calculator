const calculatorContainer = document.querySelector(".calculator-container");
const keysContainer = calculatorContainer.querySelector(".keys-container");
const display = document.querySelector(".calculator-display");

keysContainer.addEventListener("click", e => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    if (!action) {
      console.log('number key');
      if (parseInt(displayedNum) === 0) {
        // let number = e.target.innerHTML;
        display.textContent = keyContent;
        
      } else {
        // append to number
        display.textContent = displayedNum + keyContent;
      }
    }
    if (action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide') {
      console.log('operator key');
    }
    if (action === 'decimal') {
      console.log('decimal');
    }
    if (action === 'clear') {
      console.log('clear');
    }
    if (action === 'calculate') {
      console.log('calculate');
    }
  }
});