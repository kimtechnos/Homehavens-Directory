
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const createContact = async (req, res) => {
  // const userId = req.user.id;
  // res.json(user);
  // console.log("user"+"userid",userId)
  try {
    const { fullName, emailAddress, subject, message } = req.body;
    const createContact = await prisma.contact.create({
      data: {
        fullName, emailAddress, subject, message
      }
    })
    res.status(200).json({ success: true, data: createContact });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ success: false, message: "server error" });
  }
};
