# Move Zeroes

## Pattern

Two Pointers

## Difficulty

Easy

## Brute Force Approach

Use two nested loops to compare each pair of elements in the array.

For every pair, check whether the current element at index `i` is `0` and the element at index `j` is non-zero.

- If the condition is true, swap both elements.
- Continue this process until all zeroes are moved to the end of the array while keeping the non-zero elements in their relative order.

### Time Complexity

O(n²)

### Space Complexity

O(1)

---

## Optimal Approach

Use two pointers, `i` and `j`.

Traverse the array using pointer `j`.

- If the current element is non-zero, swap it with the element at pointer `i`.
- Increment pointer `i` after placing the non-zero element in its correct position.
- Continue this process until the array is completely traversed.

This moves all non-zero elements to the front while automatically shifting all zeroes to the end without using any extra space.

### Why does this work?

Pointer `i` always represents the position where the next non-zero element should be placed. As pointer `j` scans the array, every non-zero element is moved to its correct position, preserving the relative order of non-zero elements while moving all zeroes to the end.

> **Note:** A small optimization is to swap only when `i !== j` to avoid unnecessary self-swaps. This does not change the algorithm's correctness or time complexity.

### Time Complexity

O(n)

### Space Complexity

O(1)

## JavaScript

See `solution.js`

## What I Learned

- Two pointers can solve in-place array manipulation problems efficiently.
- The relative order of non-zero elements is preserved while moving all zeroes to the end.
- The brute-force solution uses nested loops, while the optimal solution completes the task in a single traversal.
- Avoiding self-swaps (`i !== j`) is a small optimization that reduces unnecessary operations without affecting the overall complexity.

## LeetCode

https://leetcode.com/problems/move-zeroes/