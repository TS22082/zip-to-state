const router = require("express").Router()
const getState = require("../util/getState")

router.get("/check/:zip", (req, res) => {
  res.send(getState(req.params.zip))
})

module.exports = router