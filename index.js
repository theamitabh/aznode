const express = require('express')
const request = require('request');
const app = express(); // init express

const allEmployees = [
    { "name": "John", "age": 30, "salary": 2500 },
    { "name": "Math", "age": 32, "salary": 3500 },
    { "name": "Smith", "age": 39, "salary": 4500 },
    { "name": "Derek", "age": 34, "salary": 3000 }
]
//route handlers
app.get('/staff', (req, res) => {
    res.json({ staff: allEmployees })
})

app.get('/fortune', (req, res) => {
    //proxy call to yerkee
    request({
        uri: 'http://yerkee.com/api/fortune',
    }).pipe(res)
})


//
app.listen(process.env.PORT || 80)

