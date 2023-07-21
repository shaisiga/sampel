// exe 13

//exe 1

let str = "shai";

function exe1(str) {
    if (str.length >= 2) {
      return str.slice(-2);
    } else {
      return str;
    }
  }
  

let result = exe1(str);
console.log(result);

//exe 2
let name = 'shai';

function exe(str){
    for (var i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
}

exe(name);

//exe 3

let name = 'shaiss';
let n = 's';
let count = 0;

function exe(str,str2){
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str2) {
            count++;
        }
    }
}

exe(name,n);

console.log(count);

//exe 4 

let name1 = "abc";
let name2 = "def";


function exe4(str1, str2) {
    let combined = "";
    for (let i = 0; i < str1.length; i++) {
      combined += str1.charAt(i) + str2.charAt(i);
    }
    return combined;
  }
  

let result = exe4(name1, name2);
console.log(result);

//exe 5

let name2 = "abc";
let name3 = "def";



function exe4(str1, str2) {
  let combined = "";
  let maxLength = Math.max(str1.length, str2.length);
  for (let i = 0; i < maxLength; i++) {
      if (i < str1.length) {
        combined += str1.charAt(i);
      }
      if (i < str2.length) {
        combined += str2.charAt(i);
      }
    }
  return combined;
}

let result = exe4(name1, name2);
console.log(result);

//exe 7

function exe7(str) {
    let Count = {};
  
    for (let char of str) {
      if (Count[char]) {
        Count[char]++;
      } else {
        Count[char] = 1;
      }
    }
  
    for (let char of str) {
      if (Count[char] === 1) {
        return char;
      }
    }
  
    return null;
  }
  
  let str = "abacddbecg";
let result = exe7(str);
console.log(result);
