import { NextApiRequest, NextApiResponse } from "next";
import Work from "../../types/Work";
import { connectToDatabase } from "../../util/mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase();
  const works: Array<Work> = await db
    .collection("works")
    .find()
    .limit(3)
    .toArray();
  res.status(200).json(works);
};

export default handler;
