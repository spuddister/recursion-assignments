#!/usr/bin/node

// let array = [9, 4, 8, 2, 6, 5, 1, 7];

// console.log(mergeSort(array));

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var half = Math.floor(arr.length / 2);
  var left = arr.slice(0, half);
  var right = arr.slice(half);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var merged = [];
  var leftIndex = 0;
  var rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      merged = merged.concat(left[leftIndex]);
      leftIndex++;
    } else {
      merged = merged.concat(right[rightIndex]);
      rightIndex++;
    }
  }

  if (leftIndex >= left.length) {
    merged = merged.concat(right.slice(rightIndex));
  } else {
    merged = merged.concat(left.slice(leftIndex));
  }

  return merged;
}
