const express = require("express");
const {JobModel} = require("../models/job.model.js");

const jobRoute = express.Router();

jobRoute.get("/",async(req,res)=>{
    try {
        const jobs = await JobModel.find();
        res.status(200).json(jobs);
    } catch (error) {
        console.log(error);
        res.status(400).json({Error:error});
    }
})

jobRoute.post("/add",async(req,res)=>{
    try {
        const newJob = new JobModel(req.body);
        await newJob.save();
        res.status(200).json({message:"New job has been added"});
    } catch (error) {
        console.log(error);
        res.status(400).json({Error:error});
    }
})

module.exports = {jobRoute};

