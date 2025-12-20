import express from "express";
import dotenv from "dotenv";
import { connect } from "mongoose";
import { connectDb } from "./utils/db.js";
dotenv.config();

const app = express();

connectDb();

app.get("/", (req, res) => {
  return res.send("server running ");
});

app.listen(8000, () => {
  console.log("server is listening on post http://localhost:8000");
});
