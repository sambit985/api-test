const express = require('express');
const app = express();
const cors = require('cors');


require('./db/conn');
const Controller = require('./controller/signup');
const User=require('./model/user');
const port = process.env.PORT || 7070;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// This Rout is used for post user data 
app.post('/api/user_regist', Controller.signUp);


// App running on server
app.listen(port,(err) => {
    if (err) {
        console.log("Error while running app", err);
    } else {
        console.log("App is running on port:", port);
    }
  
})

