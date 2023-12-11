/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
    let a = [];
    a= transactions.map((item)=>{
    var check = a.find(i =>i.category===item.category)
    if(check === undefined)
    return {category:item.category,totalSpent:item.price}
    else
    return {category:check.category,totalSpent:totalSpent+check.price}
  })
  return a;
}
module.exports = calculateTotalSpentByCategory;
