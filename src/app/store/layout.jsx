import React from "react";
import Container from "../components/Container";
import { getCategory } from "@/library";

const StoreLayout = async ({ children }) => {
  const categories = await getCategory();

  return (
    <div>
      <Container className="grid grid-cols-1 md:grid-cols-5 gap-6 p-5">
        <CategoryListing categories={categories} />
        <main className="md:col-span-4">{children}</main>
      </Container>
    </div>
  );
};

const CategoryListing = ({ categories }) => {
  if (!categories || categories.length === 0) {
    return (
      <aside className="md:col-span-1 bg-white rounded-lg shadow-md p-5">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Categories</h2>
        <p>No categories found.</p>
      </aside>
    );
  }

  return (
    <aside className="md:col-span-1 bg-white rounded-lg shadow-md p-5">
      <h2 className="text-xl font-semibold mb-4 border-b pb-2">Categories</h2>

      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat.id} className="mb-2">
            <div
              className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-700 
                            hover:bg-pink-500 hover:text-white transition-colors duration-200"
            >
              {cat.name.toUpperCase()}
            </div>

            {cat.subcategories?.length > 0 && (
              <ul className="ml-4 mt-1 space-y-1">
                {cat.subcategories.map((sub) => (
                  <li
                    key={sub.id}
                    className="text-gray-600 text-sm hover:text-pink-500 cursor-pointer"
                  >
                    {sub.name} ({sub.productCount})
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default StoreLayout;
