import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const createUser = async (req, res) => {
  try {
    const { fullName, emailAddress, password } = req.body;
    const hashedpassword = bcrypt.hashSync(password, 10);
    const newUser = await prisma.user.create({
      data: {
        fullName: fullName,
        emailAddress: emailAddress,
        password: hashedpassword,
      },
    });
    res
      .status(201)
      .json({ success: true, message: "user registered successfully" });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
