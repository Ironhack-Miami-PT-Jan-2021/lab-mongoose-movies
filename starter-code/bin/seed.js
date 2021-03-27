const Celebrity = require("../models/celebrity");

const array = [
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

// establish a connection to the db
async function seedTheDb() {
  await require("../configs/mongoose.config");
  Celebrity.create(array)
    .then((celebritiesFromDB) => {
      console.log(`${celebritiesFromDB.length} celebrites have been added`);
      mongoose.connection.close();
    })
    .catch((err) => console.log("err", err));
}
