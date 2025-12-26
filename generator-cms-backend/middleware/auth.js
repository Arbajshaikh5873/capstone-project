import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

export const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "No token provided",
      });
    }

    const decode = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decode;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Error in authenticating user",
    });
  }
};


