import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.MONGO_USER || !process.env.MONGO_PASSWORD) {
  throw new Error("Set MONGO_USER and MONGO_PASSWORD in .env");
}

const user = encodeURIComponent(process.env.MONGO_USER);
const password = encodeURIComponent(process.env.MONGO_PASSWORD);

const uri = `mongodb://${user}:${password}@localhost:27017`;

export const client = new MongoClient(uri, {
  serverSelectionTimeoutMS: 5000,
});

export const db = client.db("Itsd");
