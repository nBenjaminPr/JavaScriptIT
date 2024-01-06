function calculadora(num1, op, num2) {
    switch (op) {
        case "+":
            console.log(num1+num2);
            break;
        case "-":
            console.log(num1-num2);
                break;
        case "*":
            console.log(num1*num2);
                break;
        case "/":
            console.log(num1/num2);
                    break;
    
        default:
            console.log(0);
            break;
    }
}

calculadora(3, "+", 4)
calculadora(3, "*", 4)
calculadora(3, "-", 4)
calculadora(3, "/", 4)