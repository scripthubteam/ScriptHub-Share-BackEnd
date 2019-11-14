const express = require("express"),
    router = express.Router(),
    passport = require("passport");

router.get("/login", async(req, res, next) => {

    res.redirect("/perfil");

}, passport.authenticate("discord", { failureRedirect: '/' }));

module.exports = router