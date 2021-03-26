const array = [1, 32, 2, 3, 5, 656, 23, 2, 4, 34, 6, 7, -5, -12, 23, 34, 0];
let count = 0;

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
      count += 1;
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

console.log(selectionSort(array));
console.log(array.length)
console.log("Count =", count);
