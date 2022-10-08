/* 
    Syntax:
        db.inventory.find()
        db.inventory.find({<document>})
    Example:
        db.inventory.find()
        db.inventory.find({name: 'Ford})
         
*/

import getDBCollection from "../../../utils/getDBCollection.js";
import connectDB from "../../connectDB.js";

const findOne = async (client) => {
  const db = await connectDB("sample_data", client);
  const inventory = await getDBCollection(db, "inventory");

  //Example 1:
  const result_1 = await inventory.findOne();
  console.log(result_1);

  //Example 2:
  const result_2 = await inventory.findOne({ year: 1999 });
  console.log(result_2);
};

const find = async (client) => {};

export { findOne, find };
