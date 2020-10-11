import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../util/mongodb";
import { MongoClient } from "mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase();

  const works = await db.collection("works").find().toArray();

  res.status(200).json(works);
};

export default handler;
