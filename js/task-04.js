const buttonDecrement = document.querySelector(`button[data-action="decrement"]`);
const buttonIncrement = document.querySelector(`button[data-action="increment"]`);
console.log(buttonDecrement);
console.log(buttonIncrement);

const buttonValue = document.querySelector(`#value`);
console.log(buttonValue);

let counterValue = 0;

buttonDecrement.addEventListener("click", () => {
    counterValue -= 1;
    buttonValue.textContent = counterValue;
})

buttonIncrement.addEventListener("click", () => {
    counterValue += 1;
    buttonValue.textContent = counterValue;
})