import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllHomes = async (req, res) => {
  try {
    const homes = await prisma.home.findMany();
    res.status(200).json(homes);
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};

export const getSingleHome = async (req, res) => {
  const id = req.params.id;

  try {
    const home = await prisma.home.findFirst({
      where: { id: id },
    });

    res.status(200).json(home);
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};

export const createHome = async (req, res) => {
    // res.send("create home")
  try {
    const { homeTitle, homeLocation, homeType, homePrice } = req.body;

    const newHome = await prisma.home.create({
      data: {
        homeTitle,
        homeLocation,
        homeType,
        homePrice,
      },
    });

    res.status(201).json(newHome);
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};

export const updateHome = async (req, res) => {
  const id = req.params.id;
  try {
    const { homeTitle, homeLocation, homeType, homePrice } = req.body;

    const updatedHome = await prisma.home.update({
      where: { id: id },
      data: {
        homeTitle,
        homeLocation,
        homeType,
        homePrice,
      },
    });

    res.json(updatedHome);
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};

export const deleteHome = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedHome = await prisma.home.delete({
      where: { id: id },
    });
    res.status(200).json(deletedHome);
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
