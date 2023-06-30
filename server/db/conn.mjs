import { MongoClient } from "mongodb";
// import '../config.env'

const connectionString = process.env.ATLAS_URI || "";

const connectToMongoDB = async () => {
  const client = new MongoClient(connectionString);

  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db("sample_training");
    return db;
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }
};

export default connectToMongoDB;
