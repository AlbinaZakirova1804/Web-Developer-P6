//mango pw: 1234
//connecting string: mongodb+srv://zak1804:<password>@cluster0-ejyrz.mongodb.net/test?retryWrites=true&w=majority
//mongodb://zak1804:1234@cluster0-shard-00-00-ejyrz.mongodb.net:27017,cluster0-shard-00-01-ejyrz.mongodb.net:27017,cluster0-shard-00-02-ejyrz.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority


const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const sauceRoutes = require('./routes/sauce');

const app = express();


//db connection
mongoose.connect('mongodb://zak1804:1234@cluster0-shard-00-00-ejyrz.mongodb.net:27017,cluster0-shard-00-01-ejyrz.mongodb.net:27017,cluster0-shard-00-02-ejyrz.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority')
.then(()=>{
    console.log('Successfully connected to MongoDB Atlas!');
})
.catch((error)=>{
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
});
//


//Cross Origin Resource Sharing
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


app.use(bodyParser.json());


/*app.use((req, res, next) => {
console.log("Request recived!");
next();
});

app.use((req, res, next) => {
res.status(201);
next();
});

app.use((req, res, next) => {
    res.json({message: "Your request was successful!"});
    next();
}); 

app.use((req, res, next) => {
    console.log("Response sent successfully!");
})*/



app.use('/api/sauces', sauceRoutes);

module.exports = app;