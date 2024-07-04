// for the authetication we will use express -> install express first
const express = require('express');
const cors = require('cors');
// This line imports express module,the require ('express') function call loads the Express
// library,which is a web application framework for Nodejs
const app = express();


// This line creates an instance of Express application.



app.use(cors());

app.use(express.json());


// Example of a GET Request
/*

app.get('/test',(req,res)=>{
    res.json('test ok3');
})

*/


// This setups a route handler for HTTP GET request to the path '/test'
// app.get('/test',..)  => Defines a route for GET request to the URL '/test'
// the second argument is callback function which will be executed when the route is matched. the calllback function takes two arguments:'req' ->
// the request object and 'res' object 


// the res.json('test okay') => sends a JSON response conatining a string 'test okay'


app.post('/register', (req, res) => {
    // post request we will send some info with post request
    const{username,password}= req.body; 
    res.json({requestData:{username,password}});


    res.json('test ok3');

});

// Access-Control-Allow-Origin header is required for the backend to function
// for it we will be installing cors -> Cross-Origin Resource Sharing package
/* 
app.get('/register', (req, res) => {
    res.json('test ok3');
})

app.post('/register', (req, res) => {
    // post request we will send some info with post request 

    res.json('test ok3');

});

*/




app.listen(4000);


/* Nodemon is a development tool that automatically restarts your Node.js application
 when it detects any changes in the source files */