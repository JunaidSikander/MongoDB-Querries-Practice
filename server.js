/* eslint-disable no-undef */
import { MongoClient } from "mongodb";
import lookupApp from "./challenges/Phone-Number-Lookup-App/lookup.js";
import connectDB from "./db/connectDB.js";
import { findOne } from "./db/querries/insert/find.js";
import { insertMany, insertOne } from "./db/querries/insert/insert.js";
import seed from "./seed.js";

const client = new MongoClient("mongodb://localhost:27017");

// async function main() {
//   const db = await connectDB("sample_data", client);
//   const orderCollection = (db.order = db.collection("order"));

//   const orders = await orderCollection.findOne();

//   console.log(orders);
// }

switch (process.argv.at(-1)) {
  case "seed":
    seed(client)
      .then(() => {
        console.log("Successfully seeded database");
      })
      .catch(() => console.log("Error: Couldn't seed database"))
      .finally(() => {
        process.exit(0);
      });
    break;
  case "lookupApp":
    await lookupApp(client);
    break;
  case "insertOne":
    insertOne(client);
    break;
  case "insertMany":
    insertMany(client);
    break;
  case "findOne":
    findOne(client);
    break;
  default:
    console.log("Something went wrong");
}

// main()
//   .then(() => {})
//   .catch(() => {})
//   .finally(() => {});
