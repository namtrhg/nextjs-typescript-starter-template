import Link from "next/link";

export default function Post({ post }) {
  return (
    <>
      <Link href="/post/[id]" as={`/post/${post.id}`}>
        <a>
          <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden border-2 hover:border-gray-500">
            <div>
              <img
                className="h-56 w-full"
                src={`${
                  post.url
                    ? post.url
                    : "http://aquaphor.vn/wp-content/uploads/2016/06/default-placeholder.png"
                }`}
                alt="img"
              />
            </div>
            <div className="h-28 px-5 py-3">
              <h3 className="text-gray-700 uppercase font-semibold">
                {post.name}
              </h3>
              <div className="grid grid-cols-2 grid-rows-1">
                <span className="text-indigo-500 uppercase mt-2">
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })
                    .format(post.createdAt)
                    .toString()}
                </span>
                <span className="text-indigo-500 mt-2 text-right uppercase">
                  {post.post_category.name}
                </span>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
}
