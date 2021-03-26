const array = [1, 32, 2, 3, 5, 656, 23, 2, 4, 34, 6, 7, -5, -12, 23, 34, 0, 12, 32, 135, 453, 123, 0, 34];
let count = 0;

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      count += 1;
    }
  }
  return arr;
}

console.log(bubbleSort(array));
console.log(array.length);
console.log("Count =", count);
