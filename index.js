const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth.js")


const app = express();
const port = 8080;

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useUrlParser: true},() => {
    console.log('Connected to MongoDB');
});

// middlewares
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);


app.listen(port, () => {
    console.log(`server started on port ${port}`);
})