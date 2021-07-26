export default function ProductImage({ images }) {
  return (
    <>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden border-2 hover:border-gray-500 hover:scale-150"
          >
            <div>
              <img
                className="h-56 w-full"
                src={`${
                  image.url
                    ? image.url
                    : "http://aquaphor.vn/wp-content/uploads/2016/06/default-placeholder.png"
                }`}
                alt="img"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
