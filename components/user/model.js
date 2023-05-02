const mongoose = require("mongoose");



const Schema = mongoose.Schema;

const mySchema = new Schema({
    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: "Message"
      }  
    ],
    
    chats: [
      {
        type: Schema.Types.ObjectId,
        ref: "Chat"
      }
    ],

    name: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        unique: true
    },

    image: {
        type: String,
        unique: true
    },

    date: {
      type: Date,
      default: Date.now
    }

})

const model = mongoose.model("User", mySchema);
module.exports = model;