function calculatePercentage() {
    const num1Input = document.getElementById('num1');
    const percentInput = document.getElementById('percent');
    const answerElement = document.getElementById('answer');

    const num1 = parseFloat(num1Input.value);
    const percent = parseFloat(percentInput.value);

    if (isNaN(num1) || isNaN(percent)) {
        answerElement.textContent = 'Please enter valid numbers.';
        return;
    }

    const answer = (num1 * percent) / 100;
    answerElement.textContent = `${percent}% of ${num1} is ${answer}.`;
}
