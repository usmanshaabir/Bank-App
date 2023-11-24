const express = require("express");
const router = express.Router();
const UserModel = require("../../Models/UserModel/models");

// Send Data In DataBase
router.post("/userdata", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const foundData = await UserModel.find({ name: data.name });
    console.log(foundData);
    if (foundData.length > 0) {
      res.send({ status: 1, data: 'Name already exists' });
    } else {
      const savedata = await UserModel.create(data);
      res.status(200).json({ message: "User data stored successfully!", savedata });
    }
  } catch (error) {
    console.error("Error storing user data in the database", error);
    res.status(500).json({ error: 'Internal server error' });
  }

})

// Get Data In DataBase

router.get('/getuser', async (req, res) => {
  try {
    const response = await UserModel.find()
    res.send({ status: 1, data: response })
  } catch (error) {
    console.log(error);
  }
})

router.get('/getSpecificUser/:_id', async (req, res) => {
  try {
    const { _id } = req.params._id
    const response = await UserModel.findOne(_id)
    res.send({ status: 1, data: response })
  } catch (error) {
    console.log(error);
  }
})

// delete Data In DataBase

router.delete("/deleteuser/:id", async (req, res) => {

  try {
    const id = req.params.id
    const UserRemove = await UserModel.findByIdAndDelete(id)
    res.status(200).json({ message: "user delete successfully!", UserRemove })
  } catch (error) {
    console.log("user not delete in database", error);
  }

})

// update Data in database
router.put("/updatedeposit/:_id", async (req, res) => {
  try {
    const _id = req.params.id;
    const newData = req.body;
    console.log(newData, 'new data');
    const updatedUserData = await UserModel.findOneAndUpdate(_id, newData, { new: true });
    console.log(updatedUserData);
    if (updatedUserData) {
      res.status(200).json({ message: "Data updated successfully!", updatedUserData });
      console.log("Data updated");
    } else {
      res.status(404).json({ messageError: "User not found" });
      console.log("User not found");
    }
  } catch (error) {
    console.log("Data not updated", error);
    res.status(500).json({ messageError: "Internal server error" });
  }
});


module.exports = router
