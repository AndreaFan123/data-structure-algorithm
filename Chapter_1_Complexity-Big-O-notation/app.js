//算出 1 + 2 + 3 + 4....+n

function fn1(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function fn2(n) {
  return ((1 + n) * n) / 2;
}

let time1 = window.performance.now();
fn1(10000000);
let time2 = window.performance.now();
let timeSpent1 = (time2 - time1) / 1000;
console.log(`It takes ${timeSpent1} to run fn1`);

let time3 = window.performance.now();
fn2(10000000);
let time4 = window.performance.now();
let timeSpent2 = (time3 - time4) / 1000;
console.log(`It takes ${timeSpent2} to run fn2`);
