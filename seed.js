import connectDB from "./db/connectDB.js";
import addMovies from "./db/addMovies.js";
import addOrders from "./db/addOrders.js";
import addInventory from "./db/addInventory.js";

const seed = async (client) => {
  const db = await connectDB("sample_data", client);
  db.collection("movies").deleteMany();
  db.collection("orders").deleteMany();
  db.collection("inventory").deleteMany();
  await addInventory(db);
  await addMovies(db);
  await addOrders(db);
};

export default seed;
