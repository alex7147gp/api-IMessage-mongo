const express = require("express")
const controllers = require("./controller")

const Store = require("./store");

const router = express.Router()

router.get("/", (req, res) => {
  
  const { user } = req.query;

  controllers.getUsers(user)
  .then((userFull) => {
    console.log(userFull);

    res.status(200).json(userFull);
  })
  .catch((err) => {
    res.status(400).json({ "error": `${err}` })
  })

} )

router.post("/", (req, res) => {

  const { users } = req.body

  console.log(users) 

  controllers.addChat(users)
    .then((userFull) => {
      res.status(201).json(userFull);
    })
    .catch((err) => {
      res.status(400).json({ "error": `${err}` })
    })
} )

router.get("/:id", (req, res) => {

  const { id } = req.params;

  controllers.getUser(id)
    .then((response) => {
      res.json(response)
    })
    .catch((err) => {
      res.status(500).json({ "error": `${err}`})
    })

})

router.post("/update/:id", (req, res) => {

  const { user } = req.body

  const { id } = req.params;

  controllers.updateUser(id, user)
    .then((response) => {
      res.json(response)
    })
    .catch((err) => {
      res.status(500).json({ "error": `${err}`})
    })

})

router.post("/delete/:id", (req, res) => {

  const { id } = req.params;

  controllers.deleteUser(id)
    .then((response) => {
      res.json(response)
    })
    .catch((err) => {
      res.status(500).json({ "error": `${err}`})
    })

})

module.exports = router;