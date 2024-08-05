# The Odin Project - Recursion Practice

## Overview

This is a mini project that forms part of [The Odin Project JavaScript Course](https://www.theodinproject.com/lessons/javascript-recursion), with the aim of providing students the opportunity to practice utilising recursion.

There are two classic problems to tackle.

1. Fibonacci numbers
   - The [Fibonacci Sequence](https://en.wikipedia.org/wiki/Fibonacci_number), is a numerical sequence where each number is the sum of the two numbers before it. Eg. 0, 1, 1, 2, 3, 5, 8, 13 are the first eight digits in the sequence.
   - The problem can be tackled iteratively, but the aim for this project is to leverage recursion to generate a given fibonacci number.
2. Merge-sort Algorithm
   - Merge-sort is an example of an algorithm that used the 'divide-and-conquer' approach of recursion to reduce a sorting problem to smaller and smaller sub-problems.
   - In it's simplest form, merge sort will:
     1. Given an array, split the array into 2 halves if the length of the array is greater than 1.
     2. Sort the left sub-array.
     3. Sort the right sub-array.
     4. Merge the two halves together.
   - Recursion can be used to further split the left and right sub-arrays into even smaller sub-arrays, simplifying the sorting that will occur when they are merged back together.
   - For an easily digestible introduction to the merge-sort algorithm, please watch the following YouTube [video](https://www.youtube.com/watch?v=Ns7tGNbtvV4&feature=youtu.be) from Harvard's CS50x course.

## My Solutions

### Fibonacci

My code can be found here: [./fibonacci/index.js](./fibonacci/index.js).

There are two solutions to the problem.

**Solution 1: Iterative Approach**\
Here I've utilised a `for` loop to iteratively calculate the Fibonacci numbers and append them to an array. Once the desired number has been reached, the array is returned (though the specific Fibonacci number could also be returned easily).

**Solution 2: Recursive Approach**\
Here, recursion is utilised to calculate the Fibonacci numbers.

The recursive approach can come with some additional challenges, namely

- The possibility of incurring 'stack overflow'
- The potential for slow execution time

To try and avoid these issues, I've utilised function properties to define an array, `fib.cache` that stores previously calculated Fibonacci numbers.

By defining the array as a property of the function, the array can retain the calculated Fibonacci numbers for future reference. That way, if the function is tasked with calculating a previously calculated value, it can instantly return it as opposed to running the calculation from scratch. \
The exception to this would be when a new instance of the function is instantiated through the use of `new`. That instance would then have it's own parameter.

### Merge-sort

My code can be found here: [./merge-sort/index.js](./merge-sort/index.js)

This is my first time implementing an algorithm via a programming language, so I've looked to break down the problem into smaller chunks. Specifically, I've:

- Defined a nested function that is solely responsible for splitting a given array in half
- Defined a nested function that is solely responsible for merging two _pre-sorted_ arrays.
- The merge-sort logic which includes the recursive step.
