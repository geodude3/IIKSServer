const express = require('express');
const { appendFile } = require('fs');
const {readFile, readFileSync, read} = require('fs');
const app = express();

var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

let connections = 1;

/*
app.get("/connections", (req, res) => {
    res.json({ connections: connections});
});
*/


app.get("/api/connections", (req, res) => {
    res.json({ message: connections });
    connections++;
});


app.get("/api", (request, response) => {
    response.json({ message: "Hi from server" });
    connections++;

});



app.listen(process.env.PORT || 3000, ()=>console.log("server launched on port 3000"));