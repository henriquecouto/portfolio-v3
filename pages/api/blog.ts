import { NextApiRequest, NextApiResponse } from "next";
import Post from "../../types/Post";
import { connectToDatabase } from "../../util/mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase();
  const posts: Array<Post> = await db
    .collection("blog")
    .find()
    .limit(3)
    .toArray();
  res.status(200).json(posts);
};

export default handler;
