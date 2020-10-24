import { NextApiRequest, NextApiResponse } from "next";
import Post from "../../types/Post";
import { connectToDatabase } from "../../util/mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase();
  const posts: Array<Post> = await db
    .collection("blog")
    .find()
    .sort({ id: -1 })
    .limit(1)
    .toArray();
  res.status(200).json(posts[0]);
};

export default handler;
