// https://www.theodinproject.com/lessons/javascript-recursion

// with iteration
function fibsIt(n) {
  if (n < 0) return console.log('You must supply a positive integer to fibs');

  let arr = [];

  for (let i = 0; i <= n; i += 1) {
    if (i === 0) {
      arr.push(0);
    } else if (i === 1) {
      arr.push(1);
    } else {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  }

  return arr;
}

// with recursion
function fibs(n) {
  if (n < 0) return console.log('You must supply a positive integer to fibs');

  if (!fibs.cache) {
    fibs.cache = [0, 1];
  }

  if (fibs.cache[n] !== undefined) {
    return fibs.cache[n];
  }

  fibs.cache.push(fibs(n - 1) + fibs(n - 2));
  return fibs.cache[n];
}

console.log(fibs(8));
