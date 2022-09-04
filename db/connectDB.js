const connectDB = async (dbName = "", client = null) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    console.log("Connected successfully to server");
    return db;
  } catch (err) {
    console.log("Error connecting to db");
  }
};

export default connectDB;
