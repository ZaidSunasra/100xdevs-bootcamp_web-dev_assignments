/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {

  let categoryTotal = new Map();
  let categoryWiseExpense = [];

  for (const tx of transactions) {
    const category = tx.category;
    const price = Number(tx.price) || 0;

    if (!categoryTotal.has(category)) {
      categoryTotal.set(category, 0);
      categoryWiseExpense.push(category);
    }

    categoryTotal.set(category, categoryTotal.get(category) + price);
  }

  categoryWiseExpense =   categoryWiseExpense.map((c) => ({ category: c, totalSpent: categoryTotal.get(c) }));
  return categoryWiseExpense;
  
}


module.exports = calculateTotalSpentByCategory;