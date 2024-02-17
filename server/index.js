const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "task"
})

app.post('/register', (req, res) => {
    const { fname, lname, email, password } = req.body;

    con.query("INSERT INTO users (firstname, lastname, email, password) VALUES (?, ?, ?, ?)", [fname, lname, email, password],
 
        (err, result) => {
            if (err) {
                console.error('Error during registration:', err);
                res.status(500).send({ message: 'Internal Server Error' });
            } else {
                res.status(200).send({ success: true, message: 'Account created successfully' });
            }
        }
    );
});

app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    con.query("SELECT * FROM users WHERE email = ? AND password = ?", [email, password], 
        (err, result) => {
            if(err){
                req.setEncoding({err: err});
            }else{
                if(result.length > 0){
                    res.send(result);
                }else{
                    res.send({message: "WRONG USERNAME OR PASSWORD!"})
                }
            }
        }
    )
})



app.listen(3001, () => {
    console.log("running backend server");
})