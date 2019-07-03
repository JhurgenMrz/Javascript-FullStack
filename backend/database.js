const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
  })

  .then(db => console.log("Database is conected"))
  .catch(err => console.log(err));
