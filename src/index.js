import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'

import authRoutes from "./routes/authRoutes.js";
import menuRoutes from "./routes/menuRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  try {
    res.send('Hello World!');
  } catch (error) {
    console.log(error)
  }
});


app.use('/api/auth', authRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/order', orderRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
