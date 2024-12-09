import  prisma  from "../../libs/prismadb.js";

export const createOrder = async (req, res) => {
  const { itemId,quantity } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where:{id: req.user.id}
    })
    const item = await prisma.menuItem.findUnique({
      where:{id: itemId}
    })
    const order = await prisma.order.create({
      data: {
        username: user.name,
        adminId: item.adminId,
        quantity, 
        item: {
          connect: { id: itemId }, 
        },
        user:{
          connect: {id: req.user.id}
        }
      },
    });
    res.status(201).json({ message: "Order created successfully", order });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const orders = await prisma.order.findMany({
      where: { userId: req.user.id },
      orderBy: { createdAt: "desc" },
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllOrders = async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied" });
  }

  try {
    
    const orders = await prisma.order.findMany({
      where:{adminId: req.user.id}, 
      orderBy: { createdAt: "desc" },
      include:{
        item:true,
        user:true
      }
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
