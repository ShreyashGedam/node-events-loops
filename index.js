const express = require("express")

const app = express()

console.log(app)

app.get("/users",function(req,res)
{
    console.log("Hello")

    res.send("Hello shreyash")
})

app.get("/books",function(req , res)
{
    res.send({
        Maths : "calculation of numbers",
        Scince : "about how things works ",
        English : "About language",
        Hindi : "another language"
    })
})

app.listen(5000,function()
{
    console.log("Listening on port 5000 ")
})