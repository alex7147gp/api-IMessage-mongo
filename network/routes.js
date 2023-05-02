const express = require("express")
const messageRouter = require("../components/message/network.router");

const userRouter = require("../components/user/network.router")
const chatRouter = require("../components/chat/network.router")

function routerApi(app) {

  const router = express.Router()
  app.use("/api/v1", router)

  router.use("/message", messageRouter);


  router.use("/user", userRouter);
  router.use("/chat", chatRouter);
}

module.exports = routerApi;