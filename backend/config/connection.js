const mongoose = require("mongoose");

const connectionString = process.env.MONGO_DB_URI;

require("dotenv").config();

mongoose.connect(connectionString);

mongoose.connection.on("connected", () => {
    console.log("MongoDB connected");
});

mongoose.connection.on("error", (err) => {
    console.log("MongoDB connection error", err);
});

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
});