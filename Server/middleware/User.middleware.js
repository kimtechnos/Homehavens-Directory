import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const validateUserInfo = async (req, res, next) => {
  const { fullName, emailAddress, password } = req.body;

  if (!fullName) {
    return res
      .status(400)
      .json({ success: false, message: "Full name is required" });
  }

  if (!emailAddress) {
    return res
      .status(400)
      .json({ success: false, message: "Email address is required" });
  }

  if (!password) {
    return res
      .status(400)
      .json({ success: false, message: "Password is required" });
  }

  try {
    const userWithEmail = await prisma.user.findFirst({
      where: { emailAddress: emailAddress },
    });

    if (userWithEmail) {
      return res
        .status(400)
        .json({ success: false, message: "Email already taken" });
    }

    next();
  } catch (error) {
    console.error("Error validating user info:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};
