const express = require("express");
const router = express.Router();
const UserModel = require("../../Models/UserModel/models");

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

router.get('/getuser', async (req, res) => {
  try {
    const response = await UserModel.find()
    res.send({ status: 1, data: response })
  } catch (error) {
    console.log(error);
  }
})


module.exports = router
