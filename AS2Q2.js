function calculate(a, b, operator) {
    switch (operator) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return b !== 0 ? a / b : 'Error: Division by zero';
        default:
            return 'Error: Invalid operator';
    }
}

console.log(calculate(10, 5, 'add'));       // 15
console.log(calculate(10, 5, 'subtract'));  // 5
console.log(calculate(10, 5, 'multiply'));  // 50
console.log(calculate(10, 5, 'divide'));    // 2
