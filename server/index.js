const express = require("express");
const app = express();
const cors = require("cors");

const dbPort = 5500;
const photosRouter = require('./routes/photos')

app.use(cors());
app.use(express.json());

app.use("/photos", photosRouter)

app.listen(process.env.PORT || dbPort, ()=> {
    console.log("Server is Running on port " + dbPort)
})

app.get('/', (req, res) => {
    res.send('Hello world');
});