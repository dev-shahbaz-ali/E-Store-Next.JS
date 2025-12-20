export const getCategory = async () => {
  const res = await fetch(
    "https://formatjsononline.com/api/products/categories",
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  const data = await res.json();
  return data.data || [];
};

export const getProduct = async () => {
  const res = await fetch("https://formatjsononline.com/api/products", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const json = await res.json();
  return json.data?.products || [];
};
