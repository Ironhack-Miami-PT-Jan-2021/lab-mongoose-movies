require("dotenv").config();
const Celebrity = require("../models/celebrity.model");
const Movie = require("../models/movie.model");
const mongoose = require("mongoose");

const celebrites = [
  {
    name: "Robert Downey Jr",
    occupation: "actor",
    catchphrase: "Look at me, I'm Ironman",
  },
  {
    name: "Celeb2",
    occupation: "actor",
    catchphrase: "I'm not Ironman",
  },
  {
    name: "Celeb3",
    occupation: "singer",
    catchphrase: "Shalalalalala",
  },
];

const movies = [
  {
    title: "Titanic",
    genre: "action",
  },
  {
    title: "Inception",
    genre: "action",
  },
  {
    title: "Terminator",
    genre: "action",
  },
];

// establish a connection to the db
async function seedTheDb() {
  await require("../configs/mongoose.config");
  Movie.create(movies)
    .then((responseFromDB) => {
      console.log(`${responseFromDB.length} entries have been added`);
      mongoose.connection.close();
    })
    .catch((err) => console.log("err", err));
}
seedTheDb();
