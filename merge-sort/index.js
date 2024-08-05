// https://www.theodinproject.com/lessons/javascript-recursion

// Create a function, mergeSort, to perform the merge-sort algorithm using recursion
// An input of [3, 2, 1, 13, 8, 5, 0, 1] should return [0, 1, 1, 2, 3, 5, 8, 13].
// An input of [105, 79, 100, 110] should return [79, 100, 105, 110]

function mergeSort(array) {
  if (!Array.isArray(array)) {
    throw new Error('mergeSort only accepts arrays');
  }

  // function to split an array in half
  function splitting(array) {
    if (array.length <= 1) {
      return array;
    }

    let mid = Math.floor(array.length / 2);

    let left = [...array.slice(0, mid)];
    let right = [...array.slice(mid)];

    return [left, right];
  }

  // left array and right array should already be sorted when passed to this function
  // if left array is length 1 then it is already sorted! (Which is should be as a result of the recursive step!)
  function merging(leftArray, rightArray) {
    let mergedArray = [];
    let i = 0;
    let j = 0;

    // compare till 1 array has been fully appended to mergedArray
    while (i < leftArray.length && j < rightArray.length) {
      if (leftArray[i] < rightArray[j]) {
        mergedArray.push(leftArray[i]);
        i += 1;
      } else {
        mergedArray.push(rightArray[j]);
        j += 1;
      }
    }

    // Append the remaining elements
    while (i < leftArray.length) {
      mergedArray.push(leftArray[i]);
      i += 1;
    }
    while (j < rightArray.length) {
      mergedArray.push(rightArray[j]);
      j += 1;
    }
    return mergedArray;
  }

  // base case
  if (array.length === 0 || array.length === 1) {
    return array;
  }

  // recursion logic
  let [leftArray, rightArray] = splitting(array);

  let sortedLeft = mergeSort(leftArray);
  let sortedRight = mergeSort(rightArray);

  return merging(sortedLeft, sortedRight);
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
