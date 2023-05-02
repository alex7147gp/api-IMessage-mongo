const db = require("mongoose");
const Model = require("./model");


class Store{
    constructor(){
      this.list = { user: [], message: []} 
    }
    
    async addMessage(userI) {

      const myMessage =  new Model(userI);
      await myMessage.save() 

      return myMessage;

    }

    async getMessages(filterUser) {

      let filter = {}

      if (filterUser !== null) {
        filter = { user: filterUser }
      }

      const messages = await Model.find(filter).populate("user");

      return messages;

    }

    async getMessage(id) {

      const message = await Model.findById(id);
      if(!message) {
        throw new Error(`id: ${id} not fount`)
      }  
      return message;

    }

    async updateMessage(id, update) {

      const message = await Model.findByIdAndUpdate(id, update);
      if(!message) {
        throw new Error(`id: ${id} not fount`)
      }  
      return message;

    }

    async deleteMessage(id) {

      const message = await Model.findByIdAndDelete(id)
      if(!message) {
        throw new Error(`id: ${id} not fount`)
      }  
      return message;

    }

}

module.exports = Store;