const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "gripstreet"
})

app.post('./register', (req, res) => {
    const sql = "INSERT INTO `users`(`username`, `epasts`, `parole`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    }) 
})

app.listen(3000, ()=> {
    console.log("listening");
})
