const calculatorContainer = document.querySelector(".calculator-container");
const keysContainer = calculatorContainer.querySelector(".keys-container");
const display = document.querySelector(".calculator-display");
let calculatorTape = document.querySelector(".calculator-tape");

keysContainer.addEventListener("click", e => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculatorContainer.dataset.previousKeyType;
    if (!action) {
      console.log("number key");
      if (displayedNum === '0' || previousKeyType === 'operator') {
        // let number = e.target.innerHTML;
        display.textContent = keyContent;

      } else {
        // append to number
        display.textContent = displayedNum + keyContent;
      }
    }
    if (action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide") {
      console.log("operator key");
      calculatorContainer.dataset.firstValue = displayedNum;
      calculatorContainer.dataset.operator = action;
      calculatorContainer.dataset.previousKeyType = 'operator'
      
      
      if (calculatorTape.textContent === '0') {
        calculatorTape.textContent = displayedNum;
      } else {
        calculatorTape.textContent = calculatorTape.textContent + displayedNum;
      }
    }
    if (action === "decimal") {
      console.log(display.textContent);
      if (display.textContent.includes(".")) {
        // do nothing
      } else {
        console.log('add decimal' + displayedNum);
        display.textContent = displayedNum + ".";
      }
    }
    if (action === "clear") {
      console.log("clear");
    }
    if (action === "calculate") {
      console.log("calculate");
      
      const firstValue = calculatorContainer.dataset.firstValue;
      const operator = calculatorContainer.dataset.operator;
      const secondValue = displayedNum;
      
      const calculate = (n1, operator, n2) => {
        let result = ''
        if (operator === 'add') {
          result = n1 + n2
        } else if (operator === 'subtract') {
          result = n1 - n2
        } else if (operator === 'multiply') {
          result = n1 * n2
        } else if (operator === 'divide') {
          result = n1 / n2
        }
        return result;
      }
      display.textContent = calculate(firstValue, operator, secondValue);
    }
  }
});