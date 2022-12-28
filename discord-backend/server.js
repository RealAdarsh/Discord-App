const express = require('express'); 
// to allow connection to client site
const http = require('http'); 
const cors = require('cors'); ;
//connection with database
const mongoose = require('mongoose');
//read the variables to configure port address
require('dotenv').config(); 

const authRoutes=require('./routes/authRoutes');

const PORT=process.env.PORT || process.env.API_PORT; 

// just like creating object of express() class
const app= express(); 
// express.json() is a built in middleware function in Express. It parses incoming JSON requests and is based on //..body-parser
app.use(express.json()); 
app.use(cors());

// register the routes 
app.use("/api/auth", authRoutes); 


// creates a HTTP server object and turns your computer into a HTTP Server
const server=http.createServer(app); 

//The server.listen() method creates a listener on the specified port or path.


mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    server.listen(PORT, () =>{
        console.log(`Server is listening on ${(PORT)}`)
    }); 
})
.catch(err=>{
    console.log("database connection failed, server not started.");
    console.error(err); 
});