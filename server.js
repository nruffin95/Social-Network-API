const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const routes = require('./routes')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(routes)

mongoose.connect("mongodb://localhost:27017/myapp");

// Use this to log mongo queries being executed!
mongoose.set("debug", true);
app.listen(PORT, () => {
  console.log(`🌍 Server Started on port ${PORT}`);
});
