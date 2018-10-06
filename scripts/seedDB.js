const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/NYTscraper"
);

const articleSeed = [
  {
    title: "",
    url: "",
    date: new Date(Date.now())
  }
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log("Placeholder");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
