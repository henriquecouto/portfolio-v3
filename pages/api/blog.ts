import { NextApiRequest, NextApiResponse } from "next";
import Post from "../../types/Post";
import { connectToDatabase } from "../../util/mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase();

  const limit = Number(req.query.limit);
  const title = req.query.title;

  const posts: Array<Post> = await db
    .collection("blog")
    .find(title && { title })
    .sort({ id: -1 })
    .limit(limit || 0)
    .toArray();
  res.status(200).json(posts);
};

export default handler;
