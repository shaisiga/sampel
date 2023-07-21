function squareNumbers(numbers) {
    const squaredNumbers = [];
  
    for (let i = 0; i < numbers.length; i++) {
      const squared = numbers[i] ** 2;
      squaredNumbers.push(squared);
    }
  
    return squaredNumbers;
  }
  
  const inputNumbers = [2, 3, 4];
  const squaredArray = squareNumbers(inputNumbers);
  console.log(squaredArray);
  
  ///op2

  function squareNumbers(numbers) {
    const squaredNumbers2 = numbers.map(num => num ** 2);
    return squaredNumbers2;
  }
  
  const inputNumbers2 = [2, 3, 4];
  const squaredArray2 = squareNumbers(inputNumbers);
  console.log(squaredArray);
  