import mongoose from "mongoose";

const connectDb = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("mongoDb connected");
    })
    .catch((error) => console.error(error));
};

export { connectDb };
