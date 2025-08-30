import express from "express";
import cors from "cors";
import HouseRoutes from "../src/routes/HouseRoutes.js"
import RoomRoutes from "../src/routes/RoomRoutes.js"

const app = express();

app.use(cors());
app.use(express.json());

// Rotas

// Casa
app.use("/api/houses", HouseRoutes);

// Cômodo
app.use("/api/rooms", RoomRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API Controle Domótica funcionando" });
});

export default app;