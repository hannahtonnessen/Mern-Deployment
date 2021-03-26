//This is the Mongo database!!
//mongoose connects to local database if it is running
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/pets", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) //promise. did it successfully connect to the database?
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));


    //on line 5, change products to the name you end up using!!