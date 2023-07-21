function createArray() {
    const length = parseInt(prompt("?מה אורך המערך:"));
    const arr = [];
    
    for (let i = 0; i < length; i++) {
      const num = parseInt(prompt(`נא להזין את המספר במיקום ${i}:`));
      arr.push(num);
    }
    
    return arr;
  }
  
  const myArray = createArray();
  console.log("המערך הוא:", myArray);
  