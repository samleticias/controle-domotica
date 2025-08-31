import express from "express";
import cors from "cors";
import HouseRoutes from "../src/routes/HouseRoutes.js"
import RoomRoutes from "../src/routes/RoomRoutes.js"
import DeviceRoutes from "../src/routes/DeviceRoutes.js"
import SceneRoutes from "../src/routes/SceneRoutes.js"; 
import SceneDeviceRoutes from "../src/routes/SceneDeviceRoutes.js"; 

import { swaggerUi, specs } from "./config/swagger.js"; // documentação da API swagger

const app = express();

app.use(cors());
app.use(express.json());

// Rotas

// Casa
app.use("/api/houses", HouseRoutes);

// Cômodo
app.use("/api/rooms", RoomRoutes);

// Dispositivo
app.use("/api/devices", DeviceRoutes);

// Cena
app.use("/api/scenes", SceneRoutes);

// Ação da cena: Dispositivo em Cena
app.use("/api/scene-devices", SceneDeviceRoutes);

// Rota Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.get("/", (req, res) => {
  res.json({ message: "API Controle Domótica funcionando" });
});

export default app;