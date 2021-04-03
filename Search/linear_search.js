const arr = [1, 3, 5, 56, 123, 12, 221, 15, 34, 6, 4, 5];
let count = 0;

function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        count += 1;
        if (array[i] === item) {
            return i;
        }
    }
    return null;
}

console.log(linearSearch(arr, 34));
console.log("Count =", count)
