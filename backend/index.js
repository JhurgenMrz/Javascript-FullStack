const express = require("express");
const morgan = require("morgan");
const multer = require("multer");

//Initialization
const app = express();

//Setting
app.set("port", 3000);

//Middlewares
app.use(morgan("dev"));

//Start the Server
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
