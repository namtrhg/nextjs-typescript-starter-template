import { PrismaClient, Product } from "@prisma/client";
import { useState } from "react";
import Layout from "../../components/Layout";
import ProductItem from "../../components/Product";

const prisma = new PrismaClient();

export default function ID({ data }) {
  const [products, setProducts] = useState<Product[]>(data);
  return (
    <Layout>
      <div className="container mx-auto px-6 py-6">
        <h3 className="text-gray-700 text-2xl font-medium font-serif">
          Our Products
        </h3>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {products.map((p, i) => (
            <ProductItem key={i} product={p} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const products: Product[] = await prisma.product.findMany({
    where: {
      published: true,
      categoryId: parseInt(params.id),
    },
    include: {
      images: true,
      category: true,
    },
  });
  return {
    props: {
      data: products,
    },
  };
}

export async function getStaticPaths() {
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
    paths: products.map((product) => ({
      params: {
        id: product.categoryId.toString(),
      },
    })),
    fallback: false,
  };
}
