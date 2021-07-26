import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Product } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const products: Product[] = await prisma.product.findMany({
    include: {
      images: true,
      category: true,
    },
  });
  res.status(200).json(products);
}
