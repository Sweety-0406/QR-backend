import  prisma  from "../../libs/prismadb.js";

export const addMenuItem = async (req, res) => {
const { name, description, price } = req.body;

try {
    const menuItem = await prisma.menuItem.create({
    data: { name, description, price, adminId: req.user.id },
    });
    res.status(201).json({message:"successful",menuItem});
} catch (error) {
    res.status(400).json({ message: error.message });
}
};

export const getMenuItems = async (req, res) => {
try {
    const menuItems = await prisma.menuItem.findMany();
    res.json(menuItems);
} catch (error) {
    res.status(500).json({ message: error.message });
}
};
  

