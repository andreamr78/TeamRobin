import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js"; // Importamos las rutas de autenticación

// Configurar variables de entorno
dotenv.config();

// Inicializar app
const app = express();
app.use(express.json());
app.use(cors());

// Conectar a MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("🔥 Conectado a MongoDB"))
  .catch((err) => console.error("❌ Error en conexión MongoDB:", err));

// Rutas de autenticación
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));