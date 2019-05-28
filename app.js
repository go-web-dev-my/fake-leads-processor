const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const db = require('./models')
const cors = require('cors')

app.use(bodyParser.json());
app.use(cors())
app.listen(3030, () => {
    console.log("Server is up and listening on 3030")
})

app.get("/", (req, res) => {
    res.send("Hello world!")
})

app.get("/leads", (req, res) => {

    return db.Leads.findAll()
        .then((leads) => {
            res.send(leads)
        })
        .catch((err) => {
            console.log(JSON.stringify(err))
            return res.send(err)
        })

})

app.get("/leads/:id", (req, res) => {

    const theId = req.params.id
    
    return db.Leads.findOne({
        where: { "id": theId }
    }).then(lead => {
        let found = lead.get({ plain: true })
        res.json({
            "success": "true",
            "lead": found
        })
    }).catch((err) => {
        console.log("ERROR: Failed to retrieve leads by id")
        return res.status(500).json({
            "success": "false",
            "error_msg": `leads #${theId} does not exist`
        })
    })

})

app.post("/leads", (req, res) => {

    console.log(req.body);
    const { name, email, contactNumber, comments } = req.body

    let fieldError = []

    if (name == undefined || name == "") {
        fieldError.push("name")
    }

    if (email == undefined || email == "") {
        fieldError.push('email')
    }

    if (contactNumber == undefined || contactNumber == "") {
        fieldError.push('contactNumber')
    }

    if (fieldError.length > 0) {
        return res.status(400).json({
            "success": "false",
            "error_msg": `${fieldError.join(', ')} must not be empty`
        })
    }

    return db.Leads.create({ name, email, contactNumber, comments })
        .then((lead) => res.json({
            "success": true,
            "lead": lead
        }))
        .catch((err) => {
            console.log('ERROR: Failed to insert the new lead', JSON.stringify(lead))
            return res.status(500).json({
                "success": "false",
                "error_msg": "Failed to insert the new lead"
            })
        })

})