import type { NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function productHandler(
  { query: { id } },
  res: NextApiResponse
) {
  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      images: true,
      category: true,
    },
  });
  res.status(200).json(product);
}
