const router = require("express").Router()
const User = require("../models/User")

router.get("/register", async (req, res) => {
    const user = await new User({
        username: "John",
        email: "john@gmail.com",
        password: "valentine123"
    })

    await user.save()
    res.send("ok")
})

module.exports = router