const Store = require("./store")



const store = new Store


const addChat = (users) => {
  
  return new Promise((res, rej) => {
    if (!users ) {
        console.error("[messageController] there are no user or message")
         rej("the data is incorrect")
        return false       
    }

    res(store.addChat(users));
  })
  
}


const getUsers = async (user = null) => {
  
  const messages = await store.getUsers(user)

  console.log(user);

  console.log(messages);

  return new Promise((res, rej) => {
    res(messages)
  })
}

const getUser = (id) => {
  
  return new Promise(async(res, rej) => {
    if (!id) {
      console.error("[messageController] there are no user or message")
       rej("the data is incorrect")
      return false       
  }
    res(await store.getUser(user));
  })
  
}
const updateUser = (id, user) => {
  
  return new Promise(async(res, rej) => {
    if (!id || !user.user || !user.message) {
        console.error("[messageController] there are no user or message")
         rej("the data is incorrect")
        return false       
    }
    
    user.date = new Date();  

    res(await store.updateUser(id, user));
  })
  
}
const deleteUser = (id) => {
  
  return new Promise(async(res, rej) => {
    if (!id) {
      console.error("[messageController] there are no user or message")
       rej("the data is incorrect")
      return false       
  }

    res(await store.deleteUser(id));
  })
  
}



module.exports = { addChat, getUsers, getUser, updateUser, deleteUser };