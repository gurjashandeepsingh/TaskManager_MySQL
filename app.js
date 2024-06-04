import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import bodyParser from "body-parser";
import db from "./models/index.js";
import authRoutes from "./routes/authRoutes.js";
import orgRoutes from "./routes/orgRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import userRoutes from "./routes/userRoutes.js";

// Prerequisites
const baseUrl = "/api";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use(`${baseUrl}/auth`, authRoutes);
app.use(`${baseUrl}/org`, orgRoutes);
app.use(`${baseUrl}/task`, taskRoutes);
app.use(`${baseUrl}/user`, userRoutes);

db.sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(
      `Connected to Database : TaskManager_MySQL
All Tables are Successfully synchronized
Server running at Port: ${process.env.PORT}`
    );
  });
});
