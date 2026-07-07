//1. Two Sum(Hash Map)
function twoSum(arr, target) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++){
        let diff = target - arr[i];
        if (map.has(diff)) {
            return [map.get(diff), i];
        }
        map.set(arr[i], i);
    }
    return [];
}
console.log(twoSum([2, 7, 11, 15], 9));
