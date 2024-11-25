const products = [
  { name: "Laptop", price: 50000 },
  { name: "Smartphone", price: 30000 },
  { name: "Headphones", price: 1500 },
  { name: "Smartwatch", price: 7000 },
  { name: "Mouse", price: 800 },
];

function productPrice(products) {
  let sum = 0;
  for (const product of products) {
    // console.log(product);
    sum = sum + product.price;
  }
  console.log(sum);
}

console.log(productPrice(products));
