import inventory from "./datasets/inventory.js";

const addInventory = async (db) => {
  try {
    const inventoryCollection = await db.createCollection("inventory");
    const { acknowledged, insertedCount } =
      await inventoryCollection.insertMany(inventory);

    if (acknowledged)
      console.log(
        `Successfully added ${insertedCount} records in inventory collection`
      );
    else console.log(acknowledged);
  } catch (err) {
    console.error("Error:", err.message);
  }
};

export default addInventory;
