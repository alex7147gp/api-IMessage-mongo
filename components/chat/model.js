const mongoose = require("mongoose");



const Schema = mongoose.Schema;

const mySchema = new Schema({
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
      }  
    ],

    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: "Message"
      }
    ],

    date: {
      type: Date,
      default: Date.now
    }

})

const model = mongoose.model("Chat", mySchema);
module.exports = model;