const products = [
  { name: "Laptop", price: 50000, quantity: 2 },
  { name: "Smartphone", price: 30000, quantity: 3 },
  { name: "Headphones", price: 1500, quantity: 5 },
  { name: "Smartwatch", price: 7000, quantity: 4 },
  { name: "Mouse", price: 800, quantity: 10 },
];

function productPrice(products) {
  let sum = 0;
  for (const product of products) {
    // console.log(product);
    sum = sum + product.price * product.quantity;
  }
  console.log(sum);
}

console.log(productPrice(products));
