function filterByAge(people) {
    return people.filter(person => person.age >= 20);
  }
  
  const peopleArray = [
    { name: 'אבי', age: 25, weight: 80 },
    { name: 'דנה', age: 20, weight: 65 },
    { name: 'יעל', age: 32, weight: 70 },
    { name: 'משה', age: 40, weight: 90 },
    { name: 'רועי', age: 17, weight: 75 },
  ];
  
  const filteredPeople = filterByAge(peopleArray);
  console.log(filteredPeople);
  