# A. Painting With Two Colors
Source: [Codeforces Round 1045 (Div. 2)](https://codeforces.com/problemset/problem/2134/A).

**Time limit:** 1 second  
**Memory limit:** 256 megabytes  

---

## Problem Statement

You are given three positive integers `n`, `a`, and `b` (`1 ≤ a, b ≤ n`).

Consider a row of `n` cells, initially all white and indexed from `1` to `n`. You will perform the following two steps in order:

1. Choose an integer `x` such that `1 ≤ x ≤ n - a + 1`, and paint the `a` consecutive cells `x, x+1, …, x+a-1` **red**.  
2. Choose an integer `y` such that `1 ≤ y ≤ n - b + 1`, and paint the `b` consecutive cells `y, y+1, …, y+b-1` **blue**.

If a cell is painted both red and blue, its final color is **blue**.

A coloring of the grid is considered **symmetric** if, for every integer `i` from `1` to `n` (inclusive), the color of cell `i` is the same as the color of cell `(n+1-i)`.

Your task is to determine whether there exist integers `x` and `y` such that the final coloring of the grid is symmetric.

---

## Input

The input contains multiple test cases.  
The first line contains an integer `t` (`1 ≤ t ≤ 500`) — the number of test cases.  

Each of the next `t` lines contains three integers `n`, `a`, and `b` (`1 ≤ n ≤ 10^9`, `1 ≤ a, b ≤ n`) — the number of cells and the lengths of segments painted red and blue respectively.

---

## Output

For each test case, print `YES` if it is possible to obtain a symmetric final coloring by some choice of `x` and `y`; otherwise print `NO`.  

The answer is case-insensitive (`YES`, `yes`, `yEs`, etc. are all accepted).

---

## Example

**Input**
```
7
5 3 1
4 1 2
7 7 4
8 3 7
1 1 1
1000000000 1000000000 1000000000
3 2 1
```

**Output**
```objectivec
YES
YES
NO
NO
YES
YES
NO
```
