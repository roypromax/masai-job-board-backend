const express = require("express");
const cors = require('cors');
const {connection} = require("./configs/db.js");
const {jobRoute} = require("./routes/jobs.route.js");

const app = express();

app.use(express.json());

app.use(cors());

app.get("/",(req,res)=>{
    res.send("Masai Job Board");
})

app.use("/jobs",jobRoute);

app.listen(8080,async()=>{
    try {
        await connection;
        console.log("Connected to database");
    } catch (error) {
        console.log("Could not connect to database");
        console.log(error);
    }
    console.log("Server is running at port 8080");
})