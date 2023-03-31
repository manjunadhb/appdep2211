const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname), "./client/build"));

app.get("/getEmployees", async (req, res) => {
  let fetchedData = await Employee.find();
  console.log(fetchedData);
  res.json(fetchedData);
});

app.listen(2222, () => {
  console.log("Listening to port 2222");
});

let connectToMDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://manjunadhb:manjunadhb@cluster0.dhgugyy.mongodb.net/players?retryWrites=true&w=majority"
    );
    console.log("Conneted to Mdb");
    //saveToMDB();
  } catch (error) {
    console.log("unable to connect to db");
    console.log(error);
  }
};

//Schema means details and rules of an object
let employeeSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

let Employee = new mongoose.model("employees", employeeSchema);

let saveToMDB = async () => {
  let sachin = new Employee({
    name: "Sachin Tendulkar",
    age: 50,
    email: "sachin@gmail.com",
  });

  let virat = new Employee({
    name: "Virat Kohli",
    age: 35,
    email: "virat@gmail.com",
  });

  let rohit = new Employee({
    name: "Rohit Sharma",
    age: 35,
    email: "rohit@gmail.com",
  });
  let dhoni = new Employee({
    name: "MS Dhoni",
    age: 41,
    email: "dhoni@gmail.com",
  });
  try {
    // await sachin.save();
    // await virat.save();
    // await rohit.save();
    // await dhoni.save();
    Employee.insertMany([sachin, virat, rohit, dhoni]);
    // Employee.find()
    // Employee.updateMany()
    // Employee.deleteMany()
    console.log("Saved successfully");
  } catch (error) {
    console.log("Something is wrong in saving");
    console.log(error);
  }
};

connectToMDB();
