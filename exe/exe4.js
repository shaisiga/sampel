let name2 = "abc";
let name3 = "def";

function exe4(str1, str2) {
  let combined = "";
  const length1 = str1.length;
  const length2 = str2.length;
  let maxLength = Math.max(length1, length2);
  for (let i = 0; i < maxLength; i++) {
      if (i < length1) {
        combined += str1.charAt(i);
      }
      if (i < length2) {
        combined += str2.charAt(i);
      }
    }
  return combined;
}

const result = exe4(name1, name2);

console.log(result);