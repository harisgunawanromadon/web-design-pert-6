const counterValue = document.getElementById('counterValue');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');

let count = 0;

// function updateDisplay() {
//     counterValue.textContent = count;
// }

increaseBtn.addEventListener('click', function () {
    count++;
    // updateDisplay();
    counterValue.textContent = count;

});

decreaseBtn.addEventListener('click', function () {
    if (count > 0) {
        count--;
        // updateDisplay();
        counterValue.textContent = count;

    }
});

resetBtn.addEventListener('click', function () {
    count = 0;
    // updateDisplay();
    counterValue.textContent = count;

});