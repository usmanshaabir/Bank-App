const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")

require("dotenv").config()

// Create App
const app = express()



// MiddleWare
app.use(cors());
app.use(express.json())

// Routes
const userRoutes = require("./src/Routes/UserRoute/routes")
app.use('/', userRoutes)

// Mongoose Conection
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;  // Fix the typo here

db.on("error", (error) => {
    console.error('MongoDB connection error:', error);
});

db.once("open", () => {
    console.log('Connected to MongoDB');
    const port = process.env.PORT;
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
});
