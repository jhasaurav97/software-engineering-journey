# Remove All Adjacent Duplicates in String

## Pattern

Stack

## Difficulty

Easy

## Brute Force Approach

Repeatedly scan the string from left to right.

Whenever two adjacent characters are the same, remove both characters.

Continue scanning the updated string until no adjacent duplicates remain.

### Time Complexity

O(n²)

### Space Complexity

O(n)

## Optimal Approach

Use a Stack to process each character.

- Traverse the string one character at a time.
- If the stack is not empty and the current character matches the top of the stack, remove the top element.
- Otherwise, push the current character onto the stack.
- After processing all characters, join the stack to form the final string.

### Why does this work?

The stack always stores the current valid characters. Whenever two adjacent characters become equal, they are immediately removed by popping the stack. This also naturally handles new adjacent duplicates that appear after previous removals, all in a single traversal.

### Time Complexity

O(n)

### Space Complexity

O(n)

## JavaScript

See `solution.js`

## LeetCode

https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

## What I Learned

- Stack is not limited to parentheses problems; it can store any type of data.
- The top of the stack represents the most recently processed character.
- Compare the current character with the stack's top to decide whether to push or pop.
- Each character is pushed and popped at most once, resulting in an O(n) solution.
- Stack is an excellent choice for problems that involve removing or matching adjacent elements.