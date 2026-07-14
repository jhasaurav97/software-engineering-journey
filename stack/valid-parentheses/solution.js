// Brute Force

var bruteIsValid = function (s) {
    let prev = "";
    while (prev !== s) {
        prev = s;

        s = s.replace("()", "")
            .replace("[]", "")
            .replace("{}", "");
    }
    return s.length === 0;
};

// Test Cases
console.log(bruteIsValid("()"));
console.log(bruteIsValid("()[]{}"));


// ---------------------------------------------

// Optimal (Stack)

var isValid = function (s) {
    let stack = [];
    for (let ch of s) {
        if (ch === "(" || ch === "[" || ch === "{") {
            stack.push(ch);
        } else {
            if (stack.length === 0) return false;
            let top = stack[stack.length - 1];
            if (ch === ")" && top !== "(") return false;
            if (ch === "]" && top !== "[") return false;
            if (ch === "}" && top !== "{") return false;
            stack.pop();
        }
    }
    return stack.length === 0;
}

// Test Cases
console.log(isValid("()[]{}"));
console.log(isValid("([)]"));