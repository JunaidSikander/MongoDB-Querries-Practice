import { MongoClient } from "mongodb";
import lookupApp from "./challenges/Phone-Number-Lookup-App/lookup.js";
import connectDB from "./db/connectDB.js";
import seed from "./seed.js";

const client = new MongoClient("mongodb://localhost:27017");

// async function main() {
//   const db = await connectDB("sample_data", client);
//   const orderCollection = (db.order = db.collection("order"));

//   const orders = await orderCollection.findOne();

//   console.log(orders);
// }

if (process.argv.at(-1) === "seed") {
  seed(client)
    .then(() => {
      console.log("Successfully seeded database");
    })
    .catch(() => console.log("Error: Couldn't seed database"))
    .finally(() => {
      process.exit(0);
    });
} else if (process.argv.at(-1) === "lookupApp") {
  await lookupApp(client);
}
// main()
//   .then(() => {})
//   .catch(() => {})
//   .finally(() => {});
