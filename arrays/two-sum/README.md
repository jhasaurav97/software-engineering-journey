# Two Sum

## Pattern
Hash Map

## Difficulty
Easy

## Brute Force Approach

Use two nested loops to check every possible pair of elements in the array.

For each pair, calculate their sum.

If the sum equals the target, return their indices.

If no valid sum pair is found after traversing the array, return an empty array.

### Time Complexity

O(n²)

### Space Complexity

O(1)

## Optimal Approach

Create a HashMap to store each element along with its index.

Traverse the array once.

For every element, calculate its complement using:

```js
complement = target - arr[i];
```

Check whether the complement already exists in the HashMap.

- If it exists, return the stored index of the complement along with the current index.
- Otherwise, store the current element and its index in the HashMap.

If no valid pair is found after traversing the array, return an empty array.

### Why does this work?

The complement of the current element is the only value needed to reach the target. By storing previously visited elements in a HashMap, we can find the complement in constant time, reducing the overall time complexity to O(n).

### Time Complexity

O(n)

### Space Complexity

O(n)

## JavaScript

See `solution.js`

---

## What I Learned

- A HashMap allows constant-time lookups, reducing the time complexity from O(n²) to O(n).
- Store each element and its index while traversing the array only once.
- Before storing the current element, check whether its complement already exists in the HashMap.
- HashMap is one of the most common techniques for solving array lookup problems efficiently.

## LeetCode
https://leetcode.com/problems/two-sum/