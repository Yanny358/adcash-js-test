import mongoose from "mongoose";
import config from "config";

async function connection() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    console.log("Connection to DB success");
  } catch (error) {
    console.error("Could NOT connect to DB");
    process.exit(1);
  }
}

export default connection;