# Contains Duplicate

## Pattern

Hash Set

## Difficulty

Easy

## Brute Force Approach

Compare every element with all the remaining elements in the array.

- If any two elements are equal, return `true`.
- If no duplicate is found after checking all pairs, return `false`.

### Time Complexity

O(n²)

### Space Complexity

O(1)

## Optimal Approach

Use a HashSet to keep track of the elements seen so far.

- Traverse the array.
- If the current element already exists in the HashSet, return `true`.
- Otherwise, add the element to the HashSet.
- If the traversal finishes without finding duplicates, return `false`.

### Why does this work?

A HashSet stores only unique elements and provides average **O(1)** lookup time. As we traverse the array, checking whether an element already exists in the set lets us detect duplicates efficiently without comparing every pair of elements.

### Time Complexity

O(n)

### Space Complexity

O(n)

## JavaScript

See `solution.js`

## LeetCode

https://leetcode.com/problems/contains-duplicate/

## What I Learned

- Brute force compares every pair of elements, resulting in **O(n²)** time complexity.
- A HashSet is an efficient way to detect duplicates using constant-time lookups.
- HashSet stores only unique values, making duplicate detection straightforward.
- Choosing the right data structure can significantly improve the solution from quadratic to linear time.