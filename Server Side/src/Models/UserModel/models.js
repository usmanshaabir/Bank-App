const mongoose = require("mongoose");

const UserModel = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    branchCode: Number,
    accountType: String,
    cnicNumber: Number,
    accountNumber: Number,
    deposit: Number,
    description: String
}, {
    collection: "accountDetail",
    versionKey: false
})

const users = mongoose.model("accountDetail", UserModel)

module.exports = users