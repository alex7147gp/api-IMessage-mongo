const Store = require("./store")
const { socket } = require("../../socket")


const store = new Store


const addMessage = (user) => {
  
  return new Promise((res, rej) => {
    if (!user.user || !user.message) {
        console.error("[messageController] there are no user or message")
         rej("the data is incorrect")
        return false       
    }

    socket.io.emit("message", user)

    res(store.addMessage(user));
  })
  
}


const getMessages = async (user = null) => {
  
  const messages = await store.getMessages(user)

  return new Promise((res, rej) => {
    res(messages)
  })
}

const getMessage = (id) => {
  
  return new Promise(async(res, rej) => {
    if (!id) {
      console.error("[messageController] there are no user or message")
       rej("the data is incorrect")
      return false       
  }
    res(await store.getMessage(user));
  })
  
}
const updateMessage = (id, user) => {
  
  return new Promise(async(res, rej) => {
    if (!id || !user.user || !user.message) {
        console.error("[messageController] there are no user or message")
         rej("the data is incorrect")
        return false       
    }
    
    user.date = new Date();  

    res(await store.updateMessage(id, user));
  })
  
}
const deleteMessage = (id) => {
  
  return new Promise(async(res, rej) => {
    if (!id) {
      console.error("[messageController] there are no user or message")
       rej("the data is incorrect")
      return false       
  }

    res(await store.deleteMessage(id));
  })
  
}



module.exports = { addMessage, getMessages, getMessage, updateMessage, deleteMessage };