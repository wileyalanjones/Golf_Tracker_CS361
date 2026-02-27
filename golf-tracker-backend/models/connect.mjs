import mongoose from "mongoose";
import "dotenv/config";

const CONNECT_STRING = process.env.MONGODB_CONNECT_STRING

const connectMongoDB = async () => {
    try {
        await mongoose.connect(CONNECT_STRING)
        console.log("MongoDB connected");
    }
    catch (error) {
        console.error("MongoDB connection error: ", error.message);
        process.exit(1)
    }
}

export default connectMongoDB;

