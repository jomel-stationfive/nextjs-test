export const fetchProductList = () =>
  fetch("https://fakestoreapi.com/products").then((res) => res.json());
