const array = [1, 32, 2, 3, 5, 656, 23, 2, 4, 34, 6, 7, -5, -12, 23, 34, 0, 12, 32, 135, 453, 123, 0, 34];
let count = 0;

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr[pivotIndex];
  let less = [];
  let greater = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) {
      continue;
    }
    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
    count += 1;
    console.log("Less =",less)
    console.log("Greater =", greater)
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort(array));
console.log(array.length);
console.log("Count =", count);
