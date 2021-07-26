import type { NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function postHandler(
  { query: { id } },
  res: NextApiResponse
) {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      post_category: true,
    },
  });
  res.status(200).json(post);
}
