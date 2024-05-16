require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;

const userRoute = require("./src/controllers/userController");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", userRoute);

app.get("/", (req, res) => {
    res.send("welcome to the blog");
});

try {
    mongoose.connect(process.env.DB_URL);
} catch (error) {
    console.error(error);
}

app.listen(port, (req, res) => {
    console.log(`Server listening on: http://localhost:${port}`);
});