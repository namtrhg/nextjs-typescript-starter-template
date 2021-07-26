import Category from "./Category";

export default function CategoryList({ categories }) {
  return (
    <section className="p-6">
      <h3 className="text-gray-700 text-2xl font-medium font-serif">
        Check out our product categories
      </h3>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 mt-6">
        {categories.map((category, i) => (
          <Category key={i} category={category} />
        ))}
      </div>
    </section>
  );
}
