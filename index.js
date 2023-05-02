const express = require("express")
const routerApi = require("./network/routes");

const conectDb = require("./libs/mongoose");
const app = express()

const cors = require("cors")

const server = require("http").Server(app)

const { connect } = require("./socket")

connect(server)

const config = require("./config/config")
const port = config.port || 3000

app.use(express.json())

app.use(cors())

app.use("/app", express.static("public"))

app.get("/", (req, res) => {
	res.send("Hello!")
})

routerApi(app)

conectDb(config.mongoDbUri);

server.listen(port, () => {
	console.log(`the server  is runing on port ${port}`)
})