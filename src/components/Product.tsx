import Link from "next/link";

export default function Product({ product }) {
  return (
    <>
      <Link href="/product/[id]" as={`/product/${product.id}`}>
        <a>
          <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden border-2 hover:border-gray-500">
            <div>
              <img
                className="h-56 w-full"
                src={`${
                  product.images.length === 0
                    ? "http://aquaphor.vn/wp-content/uploads/2016/06/default-placeholder.png"
                    : product.images[0].url
                }`}
                alt="img"
              />
            </div>
            <div className="h-28 px-5 py-3">
              <h3 className="text-gray-700 uppercase font-semibold">
                {product.name}
              </h3>
              <div className="grid grid-cols-2 grid-rows-1">
                <span className="text-indigo-500 uppercase mt-2">
                  Price: {product.price === "" ? "Contact" : product.price}
                </span>
                <span className="text-indigo-500 mt-2 text-right uppercase">
                  {product.category.name}
                </span>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
}
