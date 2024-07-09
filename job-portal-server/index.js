const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const port = process.env.PORT || 3000;
require("dotenv").config();
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
//user:kaverikumbhar200415
//password:dVwam2iuiFZPU0KW
app.use(express.json());
app.use(cors());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@job-portal.ykuhecq.mongodb.net/?appName=job-portal`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const db = client.db("job-portal");
    const jobCollections = db.collection("demoJobs");

    //post a job
    app.post("/post-job", async(req,res)=>{
      const body = req.body;
      body.createAt = new Date();

      const result = await jobCollections.insertOne(body);

      if(result.insertedId){
        return res.status(200).send(result);
      }else{
        return res.status(404).send({
          message : "Can not insert ! Please try again",
          status : false
        })
      }
    })

    //get all jobs
    app.get("/all-jobs", async (req, res) => {
      const jobs = await jobCollections.find({}).toArray();
      res.send(jobs);
    });

    //get single job using id
    app.get("/all-jobs/:id", async (req, res) => {
      const id = req.params.id;
      const job = await jobCollections.findOne({
        _id: new ObjectId(id),
      });
      res.send(job);
    });

    //get all jobs using email for myJob page
    app.get("/myJobs/:email", async (req, res) => {
      //console.log(req.params.email);
      const jobs = await jobCollections
        .find({ postedBy: req.params.email })
        .toArray();
      res.send(jobs);
    });

    //delete job
    app.delete("/job/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await jobCollections.deleteOne(filter);
      res.send(result);
    });

    //update a job
    app.patch("/edit-job/:id", async (req, res) => {
      const id = req.params.id;
      const jobData = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          ...jobData,
        },
      };
      const result = await jobCollections.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    //await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.get("/login",(req,res)=>{
//   return res.render("Login");
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});