import Product from "./Product";

export default function ProductList({ products }) {
  return (
    <section className="p-6">
      <h3 className="text-gray-600 text-2xl font-medium font-serif">
        Featured products
      </h3>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {products
          .filter((product, idx) => idx < 4)
          .map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </section>
  );
}
