import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const createReview = async (req, res) => {
 
  try {
    const { title, review, name } = req.body;
    const create = await prisma.review.create({
      data: {
        title,
        review,
        name
      },
    });
    res.status(200).json({ success: true, data: create });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ success: false, message: "server error" });
  }
};
