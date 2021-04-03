const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 45, 65];
let count = 0;

function binarySearch(array, item) {
    let start = 0;
    let end = array.length;
    let found = false;
    let position = -1;
    while (found === false && start <= end) {
        let middle = Math.floor((start + end) / 2);
        count += 1;
        if (array[middle] === item) {
            found = true;
            position = middle;
            return position;
        }
        if (item < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return position;
}

function recursiveBinarySearch(arr, item, start, end) {
    let middle = Math.floor((start + end) / 2);
    count += 1;
    if (item === arr[middle]) {
        return middle;
    }
    if (item < arr[middle]) {
        return recursiveBinarySearch(arr, item, start, middle - 1);
    } else {
        return recursiveBinarySearch(arr, item, middle + 1, end);
    }
}

console.log(binarySearch(arr, 14));
console.log(recursiveBinarySearch(arr, 14, 0, arr.length));
console.log("Array length = ", arr.length);
console.log("Count =", count);
