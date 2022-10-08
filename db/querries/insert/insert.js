/* 
Durability:
    A property that guarantees that acknowledged writes are permanently stored in the database,
     even if the database or parts thereof become temporarily unavailable 
    Configurable in MongoDB by specifying a writeConern:-
         • High durability - slower writes
         • Low durability - faster writes

    Which writeConern?
        • Cannot happen -w: "majority" data survives failover
        • Inconvenience, but OK -w: 1
    Syntax:
        db.authors.insertOne(
            { <document>},
            {
                w: <value>
                j: <boolean>
                wtimeout: <number>
            }
        )
    Example:
        db.authors.insertOne(
            { name: 'Junaid Sikander' },
            {
                w: "majority"
                j: "true" //  true means write data in database then acknowledged and false means acknowledged then write data in database
                wtimeout: 100
            }
        )

    Syntax:
        db.authors.insertMany(
            { 
                <document>,
                <document>,
                ... <document>,
            },
            {
                w: <value>
                j: <boolean>
                wtimeout: <number>
            }
        )
    Example:
        db.authors.insertMany(
            { name: 'Junaid Sikander' },
            { name: 'Ali Ahmed' },
            {
                w: "majority"
                j: "true" //  true means write data in database then acknowledged and false means acknowledged then write data in database
                wtimeout: 100
            }
        )
    
*/

import getDBCollection from "../../../utils/getDBCollection.js";
import connectDB from "../../connectDB.js";

const insertOne = async (client) => {
  const db = await connectDB("sample_data", client);

  const inventoryCollection = await getDBCollection(db, "inventory");

  const record = {
    name: "Toyota",
    model: "Corolla",
    year: 2022,
    source: "Skyble",
    sale_frequency: "Seldom",
    variations: [{ variation: "Red", quantity: 25 }],
  };

  try {
    const inventoryItem = await inventoryCollection.insertOne(record);
    console.log(inventoryItem);
  } catch (e) {
    console.log(e.message);
  }
};

const insertMany = async (client) => {
  const db = await connectDB("sample_data", client);

  const inventoryCollection = await getDBCollection(db, "inventory");

  const records = [
    {
      name: "Toyota 1",
      model: "Corolla",
      year: 2022,
      source: "Skyble",
      sale_frequency: "Seldom",
      variations: [{ variation: "Blue", quantity: 25 }],
    },
    {
      name: "Toyota 2",
      model: "Corolla",
      year: 2021,
      source: "Skyble",
      sale_frequency: "Seldom",
      variations: [{ variation: "White", quantity: 25 }],
    },
  ];

  try {
    const inventoryItem = await inventoryCollection.insertMany(records);
    console.log(inventoryItem);
  } catch (e) {
    console.log(e.message);
  }
};

export { insertOne, insertMany };
