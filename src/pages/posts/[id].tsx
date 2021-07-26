import { PrismaClient, Post } from "@prisma/client";
import { useState } from "react";
import Layout from "../../components/Layout";
import PostItem from "../../components/Post";

const prisma = new PrismaClient();

export default function ID({ data }) {
  const [posts, setProducts] = useState<Post[]>(data);
  return (
    <Layout>
      <div className="container mx-auto px-6 py-6">
        <h3 className="text-gray-700 text-2xl font-medium font-serif">
          Our Posts
        </h3>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {posts.map((p, i) => (
            <PostItem key={i} post={p} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const posts: Post[] = await prisma.post.findMany({
    where: {
      published: true,
      post_categoryId: parseInt(params.id),
    },
    include: {
      post_category: true,
    },
  });
  return {
    props: {
      data: posts,
    },
  };
}

export async function getStaticPaths() {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      post_category: true,
    },
  });
  return {
    paths: posts.map((post) => ({
      params: {
        id: post.post_categoryId.toString(),
      },
    })),
    fallback: false,
  };
}
