function multiLayeredDiscountPrice(quantity) {
  const first100Price = 100;
  const second100Price = 90;
  const above200Price = 70;

  if (quantity <= 100) {
    const total = quantity * 100;
    return total;
  } else if (quantity <= 200) {
    const first100Total = quantity * 100;
    const remainingQuantity = quantity - 100;
    const remainingQuantityTotal = remainingQuantity * second100Price;
    const total = remainingQuantityTotal + first100Total;
    return total;
  } else {
    const first100Total = 100 * first100Price;
    const second100Total = 100 * second100Price;
    remainingQuantity = quantity - 200;
    remainingTotal = remainingQuantity * above200Price;
    const total = first100Total + second100Total + remainingTotal;
    return total;
  }
}

console.log(multiLayeredDiscountPrice(201));
