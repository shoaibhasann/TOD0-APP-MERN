import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Database connected successfully to host: ${connection.connection.host}`
    );
  } catch (error) {
    console.log("Error:", error);
    process.exit(1);
  }
};

export default connectDatabase;
