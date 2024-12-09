import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'

import authRoutes from "./routes/authRoutes.js";
import menuRoutes from "./routes/menuRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
  });
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/order', orderRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
