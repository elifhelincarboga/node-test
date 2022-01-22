const app = require("express")();
const db = require("./db.json")
const bodyParser = require("body-parser")

// Configuration
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( { extended: true } ))

const listenedPort = process.env.PORT || 3000;

// Actions
app.get("/users", (req, res) => {
    res.status(200).send(
        db 
    )
})
app.get("/user/:id", (req, res) => {
    if(isNaN(req.params.id)) {
        res.status(400).send({ message: "Unprocessed data"})
    } else {
        const user = db.find(item => item.id == req.params.id)
        if (user) {
            res.status(200).send({
                user: user
            })
        } else {
            res.status(404).send({
                message : "User not found"
            })
        }
    }
})
app.post("/users", (req, res) => {
    const willSaveData = {
        id : new Date().getTime(),
        fullName : req.body.fullName,
        country : req.body.country,
        email : req.body.email,
        createdAt : new Date()
    }

    db.push(willSaveData)
    res.send(willSaveData)
})
app.patch("/users", (req, res) => {
    if(isNaN(req.params.id)) {
        res.status(400).send({ message: "Unprocessed data"})
    } else {
        const user = db.find(item => item.id == req.params.id)
        if (user) {
            Object.keys(req.body).forEach(key => {
                user[key] = req.body[key]
            })
            res.status(200).send({
                user: user
            })
        } else {
            res.status(404).send({
                message : "User not found"
            })
        }
    }
})
app.delete("/users/:id", (req, res) => {
    if(isNaN(req.params.id)) {
        res.status(400).send({ message: "Unprocessed data"})
    } else {
        const userIndex = db.findIndex(item => item.id == req.params.id)
        if (userIndex > -1) {
            db.splice(userIndex, 1)
            res.status(201).send({
                message: "User deleted"
            })
        } else {
            res.status(404).send({
                message : "User not found"
            })
        }
    }
})

app.get("/deneme", (req, res) => {
    res.status(200).send(
        { message: "hello kitty"}
    )
})

// Listen
app.listen(listenedPort, () => console.log(`Server is listening at ${listenedPort} Port`))
