import movies from "./datasets/movies.js";

const addMovies = async (db) => {
  try {
    const moviesCollection = await db.createCollection("movies");
    const { acknowledged, insertedCount } = await moviesCollection.insertMany(
      movies
    );

    if (acknowledged)
      console.log(
        `Successfully added ${insertedCount} records in movies collection`
      );
    else console.log(acknowledged);
  } catch (err) {
    console.error("Error:", err.message);
  }
};

export default addMovies;
