const db = require("mongoose");
const Model = require("./model");


class Store{
    constructor(){
      this.list = { user: [], message: []} 
    }
    
    async addUser(userI) {

      const myUser =  new Model(userI);
      await myUser.save() 

      return myUser;

    }

    async getUsers(filterUser) {

      let filter = {}

      if (filterUser !== null) {
        filter = { user: filterUser }
      }

      const messages = await Model.find(filter).populate("messages").populate("chats");

      return messages;

    }

    async getUser(id) {

      const message = await Model.findById(id).populate("messages").populate("chats");
      if(!message) {
        throw new Error(`id: ${id} not fount`)
      }  
      return message;

    }

    async updateUser(id, update) {

      const message = await Model.findByIdAndUpdate(id, update);
      if(!message) {
        throw new Error(`id: ${id} not fount`)
      }  
      return message;

    }

    async deleteUser(id) {

      const message = await Model.findByIdAndDelete(id)
      if(!message) {
        throw new Error(`id: ${id} not fount`)
      }  
      return message;

    }

}

module.exports = Store;