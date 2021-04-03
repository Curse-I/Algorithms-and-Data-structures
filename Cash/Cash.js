function cashFunction(fn) {
    let cash = {};
    return function (n) {
        if (cash[n]) {
            console.log("From hash: ", cash[n])
            return cash[n]
        }
        let result = fn(n);
        console.log("Calc by func: ", result)
        cash[n] = result;
        return result;
    }
}

function factorial(n) {
    if (n === 1) {
        return 1
    }
    return n * factorial(n - 1)
}


const cacheFactorial = cashFunction(factorial)
cacheFactorial(5)
cacheFactorial(4)
cacheFactorial(3)
cacheFactorial(4)
cacheFactorial(5)