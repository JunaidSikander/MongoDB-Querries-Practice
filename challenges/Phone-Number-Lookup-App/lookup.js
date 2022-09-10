import connectDB from "../../db/connectDB.js";

const lookupApp = async (client) => {
  let recordsCollection;
  const db = await connectDB("lookup", client);
  const isCollectionExist = await db
    .listCollections({ name: "records" })
    .hasNext();
  if (isCollectionExist) recordsCollection = db.collection("records");
  else recordsCollection = await db.createCollection("records");

  await recordsCollection.insertOne({ name: "Junaid", phone: "030627090276" });
  await recordsCollection.insertOne({ name: "Ali", phone: "030727090276" });
  await recordsCollection.insertOne({ name: "Zubair", phone: "030827090278" });
  await recordsCollection.insertOne({
    name: "Sandeed",
    phone: "030927/090279",
  });
  await recordsCollection.insertOne({ name: "Saad", phone: "03106270902" });

  const nameIndex = await recordsCollection.createIndex({ name: 1 });
  const phoneIndex = await recordsCollection.createIndex({ phone: 1 });

  console.log(`${nameIndex}, ${phoneIndex} indexes created`);
};

export default lookupApp;
