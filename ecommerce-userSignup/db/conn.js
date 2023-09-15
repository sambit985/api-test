const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/useDB', { useNewUrlParser: true })
    .then(() => {
        console.log("Connection with db is Successfull");
    }).catch((err) => {
        console.log("Error while connection with db is", err);
   })
