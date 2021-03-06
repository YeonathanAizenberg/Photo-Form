const express = require("express");
const fileUpload = require('express-fileupload');
const app = express();
const cors = require("cors");

app.use(cors());
app.use(fileUpload());
app.use(express.json());

const dbPort = 5500;
const eventsRouter = require('./routes/events')
const photoRouter = require('./routes/photo')


app.use("/events", eventsRouter)
app.use("/photo", photoRouter)

app.listen(process.env.PORT || dbPort, ()=> {
    console.log("Server is Running on port " + dbPort)
})

app.get('/', (req, res) => {
    res.send('Hello world');
});