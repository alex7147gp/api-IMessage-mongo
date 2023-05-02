const express = require("express")
const controllers = require("./controller")

const Store = require("./store");

const router = express.Router()

const multer = require("multer");

const fs = require("fs");

const storage = () => {
  if (!fs.existsSync("public")) {
    fs.mkdirSync("public");
  }
  multer.diskStorage({
    destination: "public/files/",
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  });
}

const upload = multer({
  storage: storage()
});

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

router.post("/", upload.single("image"), (req, res) => {

  const { user } = req.body

  console.log(user) 

  controllers.addUser(user)
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