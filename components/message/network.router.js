const express = require("express")
const controllers = require("./controller")

const Store = require("./store");

const router = express.Router()

router.get("/", (req, res) => {
  
  const { user } = req.query;

  controllers.getMessages(user)
  .then((userFull) => {
    console.log(userFull);

    res.status(200).json(userFull);
  })
  .catch((err) => {
    res.status(400).json({ "error": `${err}` })
  })

} )

router.post("/", (req, res) => {

  const { user } = req.body  

  console.log(user)

  controllers.addMessage(user)
    .then((userFull) => {
      res.status(201).json(userFull);
    })
    .catch((err) => {
      res.status(400).json({ "error": `${err}` })
    })
} )

router.get("/:id", (req, res) => {

  const { id } = req.params;

  controllers.getMessage(id)
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
 
  controllers.updateMessage(id, user)
    .then((response) => {
      res.json(response)
    })
    .catch((err) => {
      res.status(500).json({ "error": `${err}`})
    })

})

router.post("/delete/:id", (req, res) => {

  const { id } = req.params;

  controllers.deleteMessage(id)
    .then((response) => {
      res.json(response)
    })
    .catch((err) => {
      res.status(500).json({ "error": `${err}`})
    })

})

module.exports = router;