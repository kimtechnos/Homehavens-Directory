import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const createContact = async (req, res) => {
  //   res.send("making a contact req");
  const user = req.user;
  const { fullName, emailAddress, subject, message } = req.body;
  const userId = user.id;
  // res.json(user);
  try {
    const newContact = await prisma.contact.create({
      data: {
        fullName: fullName,
        emailAddress: emailAddress,
        subject: subject,
        message: message,
        userId: userId,
      },
    });
    res.status(201).json({ success: true, data: newContact });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ success: false, message: "server error" });
  }
};
