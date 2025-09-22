
        const operations = {
            add: (a, b) => a + b,
            sub: (a, b) => a - b,
            mul: (a, b) => a * b,
            div: (a, b) => b !== 0 ? a / b : 'Cannot divide by zero'
        };

        function calculate(op) {
            const n1 = parseFloat(document.getElementById('num1').value);
            const n2 = parseFloat(document.getElementById('num2').value);
            const valid = !isNaN(n1) && !isNaN(n2);
            const res = valid
                ? (operations[op] ? operations[op](n1, n2) : 'Unknown operation')
                : 'Please enter both numbers.';
            document.getElementById('result').textContent = 'Result: ' + res;
        }
       