//1. Two Sum(Hash Map)

// Brute Force
var bruteTwoSum = function (arr, tar) {
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] === tar) {
                return [i, j];
            }
        }
    }
    return [];
}
var res = bruteTwoSum([3, 2, 4], 6);
console.log(res);

// Optimal
var twoSum = function(arr, target) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++){
        let complement = target - arr[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(arr[i], i);
    }
    return [];
}
var response = twoSum([2, 7, 11, 15], 9);
console.log(response);