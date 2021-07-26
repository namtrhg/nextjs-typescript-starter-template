import Link from "next/link";

export default function Category({ category }) {
  return (
    <>
      <div
        className="w-full h-72 max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
        style={{
          background: `url('${
            category.url === null
              ? "http://aquaphor.vn/wp-content/uploads/2016/06/default-placeholder.png"
              : category.url
          }')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "200px 200px",
        }}
      >
        <div className="bg-gray-500 bg-opacity-50 flex items-center h-full">
          <div className="px-10 max-w-xl">
            <h2 className="text-2xl text-white uppercase font-semibold">
              {category.name}
            </h2>
            <p className="mt-2 text-gray-100 font-mono font-bold">
              {category.description
                ? category.description.slice(0, 50) + `...`
                : "no-data"}
            </p>
            <Link href="/products/[id]?name=" as={`/products/${category.id}`}>
              <button className="flex items-center mt-4 px-3 py-2 bg-indigo-600 text-white text-sm uppercase font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                <a>FIND OUT MORE</a>
                <svg
                  className="h-5 w-5 mx-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
