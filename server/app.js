const express = require("express")

const app = express()
require("dotenv").config()

const routes = require("./routes/index")

app.use(routes)

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})