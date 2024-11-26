// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget(
  laptopQuantity,
  tabletQuantity,
  mobileQuantity
) {
  const laptopPrice = 35000;
  const tabletPrice = 15000;
  const mobilePrice = 20000;
  const total =
    laptopQuantity * laptopPrice +
    tabletQuantity * tabletPrice +
    mobileQuantity * mobilePrice;

  return total;
}

const result = calculateElectronicsBudget(2, 4, 6);
console.log(result);
