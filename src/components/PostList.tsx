import Post from "./Post";

export default function PostList({ posts }) {
  return (
    <section className="p-6">
      <h3 className="text-gray-600 text-2xl font-medium font-serif">
        Newest posts
      </h3>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {posts
          ? posts
              .filter((post, idx) => idx < 4)
              .map((post) => <Post key={post.id} post={post} />)
          : "no-data"}
      </div>
    </section>
  );
}
