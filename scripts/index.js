const startBtn = document.getElementById('start');
const output = document.getElementById('output');

let counst = 0;

startBtn.addEventListener('click', () => {
    counst++;
    output.textContent = counst;
});