import { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from "next/router";
import Work from "../../types/Work";
import { connectToDatabase } from "../../util/mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase();

  const limit = Number(req.query.limit);
  const slug = req.query.slug;

  const works: Array<Work> = await db
    .collection("works")
    .find(slug && { slug })
    .limit(limit || 0)
    .toArray();
  res.status(200).json(works);
};

export default handler;
