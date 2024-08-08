import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
//dotenv lo uso para cargar variables de entorno desde .env y acceder a ellas dentro de mi código

//Al tener las variables de entorno en un archivo .env separado evito
//exponer información sensible como contraseñas, tokens, etc. al codigo fuente

dotenv.config();

import userRoutes from "./routes/userRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";

const app = express();

app.use(bodyParser.json());
app.use("/api/users", userRoutes);
app.use("/api/events", eventRoutes);

// Conexión a la base de datos

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => console.log("Conexión a la base de datos establecida"))
  .catch((err) => console.log("Error al conectar a la base de datos", err));

app.get("/", (req, res) => {
  res.send("Event Management API");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
