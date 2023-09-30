function performMathOperation(operator, num1, num2) {
    let result; 

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                console.log("Error: Division by zero");
            }
            break;
        default:
            console.log("Invalid operator");
            return;
    }

    console.log(`Result of ${num1} ${operator} ${num2} is: ${result}`);
}
