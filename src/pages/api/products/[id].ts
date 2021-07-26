import type { NextApiResponse } from "next";
import { PrismaClient, Product } from "@prisma/client";

const prisma = new PrismaClient();

export default async function productHandler(
  { query: { id } },
  res: NextApiResponse
) {
  const products: Product[] = await prisma.product.findMany({
    where: {
      categoryId: parseInt(id),
    },
    include: {
      images: true,
      category: true,
    },
  });
  res.status(200).json(products);
}
