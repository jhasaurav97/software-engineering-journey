// Valid Anagram

var bruteValidAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    let str1 = s.split("").sort().join("");
    let str2 = t.split("").sort().join("");
    return str1 === str2;
}
const response = bruteValidAnagram("anagram", "nagaram");
// const response = bruteValidAnagram("listen", "silent");
console.log(response)

var validAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    let map = new Map();
    for (let ch of s) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }
    for (let ch of t) {
        if(!map.has(ch) || map.get(ch) === 0){
            return false;
        }
        map.set(ch, map.get(ch) - 1);
    }
    return true;
}
// const res = validAnagram("anagram", "nagaram");
// const res = validAnagram("listen", "silent");
// console.log(res);