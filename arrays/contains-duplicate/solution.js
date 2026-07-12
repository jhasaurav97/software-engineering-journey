// Contains Duplicate

// Brute Force
var bruteContainsDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
};
// Test Cases
// console.log(bruteContainsDuplicate([1,2,3,1]));
// console.log(bruteContainsDuplicate([1,2,3,4]));
// console.log(bruteContainsDuplicate([1,1,1,3,3,4,3,2,4,2]));


// ---------------------------------------------

// Optimal (HashSet)

var containsDuplicate = function (nums) {
    let set = new Set(nums);
    return set.size !== nums.length;
};

// Test Cases
console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));