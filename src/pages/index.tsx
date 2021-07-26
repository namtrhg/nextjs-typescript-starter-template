import { PrismaClient, Category, Product, Post } from "@prisma/client";
import { useState } from "react";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import PostList from "../components/PostList";
import HeroSection2 from "../components/HeroSection2";

const prisma = new PrismaClient();

export default function Home({ categorydata, productdata, postdata }) {
  const [categories, setCategories] = useState<Category[]>(categorydata);
  const [products, setProducts] = useState<Product[]>(productdata);
  const [posts, setPosts] = useState<Post[]>(postdata);
  return (
    <Layout>
      <CategoryList categories={categories} />
      <HeroSection2 />
      <ProductList products={products} />
      <PostList posts={posts} />
      <HeroSection />
    </Layout>
  );
}

export async function getStaticProps() {
  const categories: Category[] = await prisma.category.findMany();
  const posts: Post[] = await prisma.post.findMany({
    include: {
      post_category: true,
    },
  });
  const products: Product[] = await prisma.product.findMany({
    where: {
      published: true,
    },
    include: {
      images: true,
      category: true,
    },
  });
  return {
    props: {
      categorydata: categories,
      productdata: products,
      postdata: posts,
    },
  };
}
