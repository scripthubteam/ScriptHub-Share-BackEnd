const express = require("express"),
    router = express.Router()

const loginRoute = require("./login")

router.use(loginRoute)


module.exports = router