import orders from "./datasets/orders.js";

const addOrders = async (db) => {
  try {
    const orderCollection = await db.createCollection("order");
    const { acknowledged, insertedCount } = await orderCollection.insertMany(
      orders
    );

    if (acknowledged)
      console.log(
        `Successfully added ${insertedCount} records in order collection`
      );
    else console.log(acknowledged);
  } catch (err) {
    console.error("Error:", err.message);
  }
};

export default addOrders;
