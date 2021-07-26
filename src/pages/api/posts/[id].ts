import type { NextApiResponse } from "next";
import { PrismaClient, Post } from "@prisma/client";

const prisma = new PrismaClient();

export default async function postHandler(
  { query: { id } },
  res: NextApiResponse
) {
  const posts: Post[] = await prisma.post.findMany({
    where: {
      post_categoryId: parseInt(id),
    },
    include: {
      post_category: true,
    },
  });
  res.status(200).json(posts);
}
