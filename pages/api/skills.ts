import { NextApiRequest, NextApiResponse } from "next";
import Skill from "../../types/Skill";
import { connectToDatabase } from "../../util/mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase();
  const skills: Array<Skill> = await db.collection("skills").find().toArray();
  res.status(200).json(skills);
};

export default handler;
