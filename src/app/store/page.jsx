import { getProduct } from "@/library";
import Container from "../components/Container";

const StorePage = async () => {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-5 gap-6 p-5">
      <ProductListing />
    </Container>
  );
};

export default StorePage;
const ProductListing = async () => {
  const products = await getProduct();

  if (!products || products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <section className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((p) => (
        <div
          key={p.id}
          className="bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col"
        >
          {/* Product image */}
          <div className="overflow-hidden rounded-t-lg">
            <img
              src={p.images?.[0] || "/placeholder.png"}
              alt={p.name}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Product info */}
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="font-semibold text-lg mb-2 line-clamp-2">
              {p.name}
            </h3>
            <p className="text-gray-500 text-sm mb-4 line-clamp-3">
              {p.description}
            </p>

            {/* Price + Add to Cart */}
            <div className="mt-auto flex items-center justify-between">
              <span className="text-lg font-bold text-green-600">
                ${p.price}
              </span>
              <button className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition transform hover:scale-105">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
