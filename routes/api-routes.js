const router = require("express").Router()
const getState = require("../util/getState")

router.get("/check/:zip", (req, res) => {
  res.json({
    state: getState(req.params.zip)
  })
})

module.exports = router