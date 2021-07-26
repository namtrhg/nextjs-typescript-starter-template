import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Post } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const posts: Post[] = await prisma.post.findMany({
    include: {
      post_category: true,
    },
  });
  res.status(200).json(posts);
}
