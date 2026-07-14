# Valid Parentheses

## Pattern

Stack

## Difficulty

Easy

## Brute Force Approach

Repeatedly remove valid bracket pairs from the string.

- Remove all occurrences of `()`, `[]`, and `{}`.
- Continue this process until no more replacements can be made.
- If the final string becomes empty, the parentheses are valid; otherwise, they are invalid.

### Time Complexity

O(n²)

### Space Complexity

O(n)

## Optimal Approach

Use a Stack to keep track of opening brackets.

- Traverse the string one character at a time.
- If the current character is an opening bracket, push it onto the stack.
- If it is a closing bracket, compare it with the top of the stack.
- If they form a matching pair, pop the stack.
- Otherwise, return `false`.
- After processing all characters, the stack should be empty for the string to be valid.

### Why does this work?

The stack always stores unmatched opening brackets. Every closing bracket must match the most recent opening bracket. If a mismatch occurs or the stack becomes empty before finding a match, the string is invalid. If all brackets are matched successfully, the stack will be empty at the end.

### Time Complexity

O(n)

### Space Complexity

O(n)

## JavaScript

See `solution.js`

## LeetCode

https://leetcode.com/problems/valid-parentheses/

## What I Learned

- Stack is the ideal data structure for matching opening and closing symbols.
- Always compare the current closing bracket with the top of the stack.
- Push opening brackets and pop only when a valid matching closing bracket is found.
- If the stack is empty before processing a closing bracket, the string is invalid.
- A valid parentheses string always leaves the stack empty after traversal.