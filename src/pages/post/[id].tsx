import { PrismaClient, Post } from "@prisma/client";
import Layout from "../../components/Layout";

const prisma = new PrismaClient();

export default function ID({ post }) {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-6">
        <h3 className="text-gray-700 text-2xl font-medium">{post.subtitle}</h3>
        {/* <h3 className="mt-3 text-gray-600">
          Cập nhật: {post.updatedAt.slice(0, 10)}
        </h3> */}
        <div
          className="mt-3"
          dangerouslySetInnerHTML={{ __html: `${post.description}` }}
        ></div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
    include: {
      post_category: true,
    },
  });
  return {
    props: {
      post,
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
