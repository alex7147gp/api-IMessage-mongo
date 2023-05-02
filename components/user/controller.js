const Store = require("./store")



const store = new Store


const addUser = (user) => {
  
  return new Promise((res, rej) => {
    if (!user.name || !user.email || !user.password) {
        console.error("[messageController] there are no user or message")
         rej("the data is incorrect")
        return false       
    }

    if (user.image) {
      const fileUrl = `http://localhost:3000/app/files/${image.filename}`;
    
      user.image = fileUrl;

    }

    res(store.addUser(user));
  })
  
}


const getUsers = async (user = null) => {
  
  const messages = await store.getUsers(user)

  console.log(user);

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
    res(await store.getUser(id));
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



module.exports = { addUser, getUsers, getUser, updateUser, deleteUser };