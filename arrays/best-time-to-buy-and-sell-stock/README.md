# Best Time to Buy and Sell Stock

## Problem

You are given an integer array `prices` where `prices[i]` is the price of a stock on the `iᵗʰ` day.

Choose one day to buy a stock and a later day to sell it.

Return the maximum profit you can achieve. If no profit is possible, return `0`.

---

## Pattern

Greedy

---

## Difficulty

Easy

---

## Brute Force Approach

Check every possible pair of buy and sell days using two nested loops. For each pair, calculate the profit and keep track of the maximum profit.

### Time Complexity

O(n²)

### Space Complexity

O(1)

---

## Optimal Approach

Initialize `minPrice` with the first element of the array and `maxProfit` as `0`.

Traverse the array once starting from the second element.

- If the current price is smaller than `minPrice`, update `minPrice`.
- Otherwise, calculate the profit using:

```js
profit = currentPrice - minPrice;
```

If the calculated profit is greater than `maxProfit`, update `maxProfit`.

After traversing the array, return `maxProfit`.

### Why does this work?

The maximum profit for any day depends on buying the stock at the lowest price seen before that day. By continuously tracking the minimum price and comparing it with the current price, we can find the maximum possible profit in a single traversal.

### Time Complexity

O(n)

### Space Complexity

O(1)

---

## JavaScript

See `solution.js`

---

## What I Learned

- Greedy algorithms do not always require sorting.
- Tracking the minimum value seen so far is enough to compute the maximum profit.
- Brute force checks every possible pair, while the optimal solution solves the problem in a single traversal.

## LeetCode

https://leetcode.com/problems/best-time-to-buy-and-sell-stock/