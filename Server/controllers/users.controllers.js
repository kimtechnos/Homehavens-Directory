import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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

export const loginUser = async (req, res) => {
  const { emailAddress, password } = req.body;
  try {
    const user = await prisma.user.findFirst({
      where: { emailAddress },
    });
    // res.json(user);
    if (user) {
      /*check password*/
      const passwordMatch = bcrypt.compareSync(password, user.password);
      if (passwordMatch === true) {
        const payload = {
          id: user.id,
          fullName: user.fullName,
          emailAddress: user.emailAddress,
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "100min",
        });
        res.cookie("access_token", token, { httOnly: true });
        res.status(200).json({ success: true, data: user });
        // res.json("logged in successfully")
      } else {
        res
          .status(400)
          .json({ success: false, message: "wrong login credentials" });
      }
    } else {
      res
        .status(400)
        .json({ success: false, message: "wrong login cresentials" });
    }
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
export const getAllusers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
export const deleteUser = async (req, res) => {
  // res.send("delete user")
  const id = req.params.id;
  try {
    const deleteUser = await prisma.user.delete({
      where: { id: id },
    });
    res.status(200).json(deleteUser);
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};

