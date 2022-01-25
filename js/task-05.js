const inputEl = document.querySelector('input#name-input');
const spanEl = document.querySelector('span#name-output');
console.log(inputEl);
console.log(spanEl);

inputEl.addEventListener('input', (e) => {
    spanEl.textContent = e.currentTarget.value;
    if (e.currentTarget.value.length === 0) {
        spanEl.textContent = 'Anonymous'
    }
});

// inputEl.addEventListener("click", () => {
//     if (spanEl.textContent !== "") {
//         spanEl.textContent = inputEl.value;
//         return inputEl.value;
//     };
//     return spanEl.textContent = `Anonymous`;
// });
