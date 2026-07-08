// Move Zeroes

// Brute Force
var bruteMoveZero = function (arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] === 0 && arr[j] !== 0) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            } 
        }
    }
    return arr;
}
var res = bruteMoveZero([0, 1, 0, 3, 12]);
console.log(res);

// Optimal
var moveZeros = function (arr) {
    let i = 0;
    for (let j = 0; j < arr.length; j++){
        if (arr[j] !== 0) {
            if (i !== j) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            i++;
        }
    }
    return arr;
}
var response = moveZeros([0, 1, 0, 3, 12]);
console.log(response);
