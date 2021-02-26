const express = require('express');

const app = express();

app.use((req, res, next) => {
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
})

//Cross Origin Resource Sharing
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

module.exports = app;