const express = require('express');
const mysql = require('mysql2')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    return res.json("I am working")
})

const pool = mysql.createPool({
    host: "127.0.0.1",
    user:"root",
    database: "worldline",
    password: "Dinu@2468",
    connectionLimit: 10
})

app.post('/addStudent',(req,res)=>{
    console.log(req.body)
    const id = req.body.id;
    const name = req.body.name;
    const age = req.body.age;
    const department = req.body.dept;
    const gender = req.body.gender;
    const dob = req.body.dob;
    pool.query(`insert into students(id,name,age,department,gender,dob) values(?,?,?,?,?,?)`,[id,name,age,department,gender,dob],(err,result)=>{
        if(err){
            console.log(err);
        }console.log(result)
    })
    res.json("Job done");
})

pool.query(`select * from students`,(err,result)=>{
    if(err){
        console.log(err);
    }console.log(result);
})

app.listen(5000,()=>console.log("listening at port 5500"))
