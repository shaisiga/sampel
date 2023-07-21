function sortShoppingLists(lists, sortOrder) {
    const sortedLists = lists.sort((a, b) => {
      if (sortOrder === 'ascending') {
        return a.localeCompare(b);
      } else if (sortOrder === 'descending') {
        return b.localeCompare(a);
      }
    });
  
    return sortedLists;
  }
  
  const shoppingLists = ['Fruits', 'Vegetables', 'Dairy', 'Meat'];
  const ascendingSortedLists = sortShoppingLists(shoppingLists, 'ascending');
  console.log('Ascending order:', ascendingSortedLists);  