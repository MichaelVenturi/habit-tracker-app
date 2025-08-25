import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) throw new Error("Mongo url not defined");
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (err) {
    console.log(`Error ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;
