import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import router from "./routes/v1/index.js";
import db from "./db.js";
const app = express();
app.use(cors());
const PORT = process.env.PORT;

// parse json
app.use(express.json());
db();
app.use("/v1", router);

app.get("/", (req, res) => {
  res.send("Welcome to the application");
});

// 404 handler - should be after all routes
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
