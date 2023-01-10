const express = require('express');
const { appendFile } = require('fs');
const {readFile, readFileSync, read} = require('fs');
const app = express();

//
const bodyParser = require("body-parser");
const router = express.Router();

//

let messages = [256];
let index = 1;
messages[0] = "first spot";

var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

let connections = 1;

/*
app.get("/connections", (req, res) => {
    res.json({ connections: connections});
});
*/


app.get("/api/connections", (req, res) => {
    res.json({ message: messages[index - 1] });
    connections++;
});


app.get("/api", (request, response) => {
    response.json({ message: "Hi from server" });
    connections++;

});

//
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post("/comment",(request,response) => {
    //code to perform particular action.
    //To access POST variable use req.body()methods.
    let json = request.body;
    console.log(json.item, index);
    response.json({ message: "post received" });
    messages[index] = json.item;
    index++;
    connections++;
    });
    
    // add router in the Express app.
    app.use("/", router);
//


app.listen(process.env.PORT || 3001, ()=>console.log("server launched on port 3001"));