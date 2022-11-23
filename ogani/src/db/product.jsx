export const fetchProduct = async () => {
  const res = await fetch("http://localhost:8000/api/product/");
  return await res.json();
};
