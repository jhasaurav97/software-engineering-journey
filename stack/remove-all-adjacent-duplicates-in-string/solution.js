// Remove All Adjacent Duplicates String

// Brute Force

var bruteRemoveDuplicates = function (s) {
    let changed = true;
    while(changed){
        changed = false;
        let str = "";
        for (let i = 0; i < s.length; i++){
            if (i < s.length && s[i] === s[i + 1]) {
                changed = true;
                i++;
            } else {
                str += s[i];
            }
        }
        s = str;
    }
    return s;
};

// Test Cases
console.log(bruteRemoveDuplicates("abbaca"));
console.log(bruteRemoveDuplicates("azxxzy"));


// ---------------------------------------------

// Optimal (Stack)

var removeDuplicates = function (s) {
    let stack = [];
    for (let ch of s) {
        if (stack.length === 0) {
            stack.push(ch);
        } else {
            let top = stack[stack.length - 1];
            if (top == ch) {
                stack.pop();
            } else {
                stack.push(ch);
            }
        }
    }
    return stack.join("");
};

// Test Cases
console.log(removeDuplicates("abbaca"));
console.log(removeDuplicates("azxxzy"));