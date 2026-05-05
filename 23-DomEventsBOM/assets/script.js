document.querySelectorAll('.op-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const action = this.getAttribute('data-op');
        executeCalculation(action);
    });
});

function executeCalculation(type) {
    const inputA = document.getElementById('firstVal').value;
    const inputB = document.getElementById('secondVal').value;
    const outDisplay = document.getElementById('finalResult');

    if (!inputA || !inputB) {
        outDisplay.innerText = "Boş buraxmayın!";
        outDisplay.style.color = "orange";
        return;
    }

    let a = parseFloat(inputA);
    let b = parseFloat(inputB);
    let total = 0;

    if (type === 'add') total = a + b;
    else if (type === 'sub') total = a - b;
    else if (type === 'mul') total = a * b;
    else if (type === 'div') {
        if (b === 0) {
            outDisplay.innerText = "Bölmək olmaz!";
            outDisplay.style.color = "red";
            return;
        }
        total = a / b;
    }

    // Nəticəni ekrana çıxarırıq
    outDisplay.innerText = Number.isInteger(total) ? total : total.toFixed(2);
    outDisplay.style.color = "#e67e22";
}