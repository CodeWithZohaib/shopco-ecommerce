import { products } from "../../../lib/data";
import { Link } from "react-router-dom";

export default function ProductGrid() {
  return (
    <section className="px-4 py-12 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="border rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.images && product.images.length > 0 ? product.images[0] : "/images/one-life front.jpeg"}
              alt={product.name}
              className="w-full h-56 object-cover rounded-lg mb-4"
              onError={(e) => {
                e.target.src = "/images/one-life front.jpeg";
              }}
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600 mt-1">₹{product.price}</p>
            <div className="text-sm text-blue-500 mt-2 hover:underline">View Product</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
