const getDBCollection = async (db = null, name = "") => {
  const isCollectionExist = await db.listCollections({ name }).hasNext();

  const collection = isCollectionExist
    ? db.collection(name)
    : await db.createCollection(name);

  return collection;
};

export default getDBCollection;
