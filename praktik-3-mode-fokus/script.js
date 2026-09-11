const focusToggle = document.getElementById('focusToggle');

focusToggle.addEventListener('change', function () {
    if (focusToggle.checked) {
        document.body.classList.add('focus-mode');
    } else {
        document.body.classList.remove('focus-mode');
    }
});