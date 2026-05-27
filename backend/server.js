const express = require("express");
const cors = require("cors")
const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("api/posts", postRoutes);

app.get("/", (req, res) => {
  return res.send("Welcome on CampusHub API");
});
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Mongo connected to API");
  })
  .catch((err) => {
    console.log(err);
  });
