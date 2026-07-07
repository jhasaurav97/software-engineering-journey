# Two Sum

## Pattern
Hash Map

## Difficulty
Easy

## Brute Force
Time: O(n²)
Space: O(1)

## Optimal
Time: O(n)
Space: O(n)

## Approach
Create a HashMap to store each number along with its index.

Iterate through the array once. For every element, calculate its complement using:

complement = target - nums[i]

Check if the complement already exists in the HashMap.

- If it exists, return the index stored in the map along with the current index.
- Otherwise, store the current element and its index in the HashMap and continue.

If the loop finishes without finding a valid pair, return an empty array.

## LeetCode
https://leetcode.com/problems/two-sum/