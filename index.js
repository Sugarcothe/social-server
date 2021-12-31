const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


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

app.get('/', (req, res) => {
    res.send("Hello World!");
})



app.listen(port, () => {
    console.log(`server started on port ${port}`);
})