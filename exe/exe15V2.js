
const inputArray = [3, 'a', 'aba'];
const doubledArray = doubled(inputArray);  // למה זה איפשר לי להגדיר ערך const
console.log(doubledArray);

function doubled(array) {
    let _arr = [];
    for (let i = 0; i < array.length; i++) {
      array.splice(i, 0, array[i]);
    }
    return array;
  }
  