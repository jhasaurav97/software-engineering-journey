# Valid Anagram

## Pattern

Sorting, Hash Map

## Difficulty

Easy

## Brute Force Approach

Split both strings into character arrays.

Sort both arrays alphabetically.

Join them back into strings.

If both sorted strings are equal, they are anagrams; otherwise, they are not.

### Time Complexity

O(n log n)

### Space Complexity

O(n)

## Optimal Approach

Use a HashMap to count the frequency of each character in the first string.

Traverse the second string and decrease the frequency of each character.

- If a character does not exist in the HashMap or its count becomes negative, return `false`.
- If all characters are processed successfully, return `true`.

### Why does this work?

Two strings are anagrams only if every character appears the same number of times in both strings. A HashMap efficiently tracks the frequency of each character, allowing us to verify this in a single traversal.

### Time Complexity

O(n)

### Space Complexity

O(n)

## JavaScript

See `solution.js`

## LeetCode

https://leetcode.com/problems/valid-anagram/

## What I Learned

- Anagrams contain the same characters with the same frequency, regardless of their order.
- Sorting both strings provides a simple brute-force solution.
- A HashMap allows counting character frequencies efficiently in linear time.
- Always compare the lengths of both strings first to handle invalid cases quickly.