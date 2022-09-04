import { MongoClient } from "mongodb";
import connectDB from "./db/connectDB.js";
import seed from "./seed.js";

const client = new MongoClient("mongodb://localhost:27017");

async function main() {
  const db = connectDB("");
  return "done";
}

if (process.argv.at(-1) === "seed") {
  seed(client)
    .then(() => {
      console.log("Successfully seeded database");
    })
    .catch(() => console.log("Error: Couldn't seed database"))
    .finally(() => {
      process.exit(0);
    });
}

main()
  .then(() => {})
  .catch(() => {})
  .finally(() => {});
