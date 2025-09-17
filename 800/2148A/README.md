# A. Sublime Sequence

- **Source:** [Codeforces Round 1050 (Div. 4), Problem A](https://codeforces.com/problemset/problem/2148/A)  
- **Time limit per test:** 1 second  
- **Memory limit per test:** 256 megabytes  

---

## Problem Statement

You are given two integers $x$ and $n$. Construct a sequence of length $n$ as follows:

- the first element is equal to $x$,
- the second element is equal to $-x$,
- the third element is equal to $x$,
- the fourth element is equal to $-x$,
- and so on, alternating between $x$ and $-x$.

Calculate the sum of all $n$ elements in this sequence.

---

## Input

The first line contains a single integer $t$ ($1 \le t \le 100$) — the number of test cases.  
Each of the following $t$ lines contains two integers $x$ and $n$ ($1 \le x, n \le 10$).

---

## Output

For each test case, output a single integer — the sum of all elements in the constructed sequence.

---

## Examples

### Input
```
4
1 4
2 5
3 6
4 7
```

### Output
```objectivec
0
2
0
4
```
