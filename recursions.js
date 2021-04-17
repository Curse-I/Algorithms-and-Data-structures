const factorial = (n) => {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
};
console.log(factorial(10));

const fibonacci = (n) => {
    if (n === 1 || n === 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
};
console.log(fibonacci(8));
