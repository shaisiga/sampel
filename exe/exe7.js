function exe7(str) {
    let count = {};

    for (let char of str) {
        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }

    for (let char of str) {
        if (count[char] === 1) {
            return char;
        }
    }

    return null;
}

let str = "abacddbecg";

let result = exe7(str);

console.log(result);