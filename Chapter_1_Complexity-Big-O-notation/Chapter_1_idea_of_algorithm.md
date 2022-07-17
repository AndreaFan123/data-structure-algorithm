## Table of contents

# What is Algorithm ? 什麼是演算法？

Algorithm is a finite sequence of well-defined, computer-implementable instructions, typically to solve a class of problems or to perform a computation.

透過有限且定義清楚的步驟 / 指令，在有限的空間與時間內能夠讓電腦執行並解決問題，換句話說，就是給電腦的邏輯思維。

簡單來說演算法是透過一系列的資料，加上縝密地定義產生的邏輯思維後，得以解決某些問題的方法。

好的演算法除了要符合盡可能地`運算時間少`，以及所`佔用的記憶體空間少`，不過端看情況而定，但若能符合這兩種條件，通常都是好的。

> programming = Data Structures + Algorithm

> **Note**
>
> [What's an algorithm? - David J. Malan](https://www.youtube.com/watch?v=6hfOvs8pY1k)
>
> [Intro to Algorithms: Crash Course Computer Science #13](https://www.youtube.com/watch?v=rL8X2mlNHPM&t=18s)

# Comparing Algorithm 演算法的比較

Why do we need to compare algorithms?

```javascript
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
fn2(1000);
let time4 = window.performance.now();
let timeSpent2 = (time3 - time4) / 1000;
console.log(`It takes ${timeSpent2} to run fn2`);
```

- We can see that from the previous example, `fn2()` took less time then `fn1()`, what if we change number from 1000 to 10000000 ?

```javascript
fn1(1000);
// It takes 0.00019999999925494194 to run fn1
fn2(1000);
// It takes -0.000900000000372529 to run fn2
```

- `fn2()` is still way better then `fn1()`

```javascript
fn1(10000000);
// It takes 0.017700000001117586 to run fn1
fn2(10000000);
// It takes -0.00009999999962747097 to run fn2
```

### Conclusion：

By comparing different functions, we can understand which one is faster or which one takes less memory, hence, time and space are matter!

But it's not realistic to time each function, because:

- Even same computer gets different result.
- Computer power machine differences, better CPU vs. normal CPU.

# Complexity

Timing each function is not a realistic way, so we need to analyse the complexity of a algorithm, especially time and space complexity.

- Every addition, substraction, multiplication, division and comparision represents 1 operation.
- Complexity means giving an input size `how many operations` do we need to perform in an algorithm.
- Use `f(n)` to show the equation of complexity and input size.
- In short, if an algorithm takes less operation to complete, then it is good.
