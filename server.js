const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const recipes = require('./routes/recipes');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//db config
const db = require('./config/keys').mongoURI;

//connect to mongoDB
mongoose
.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log('MongoDB Connected'))
.catch(err=> console.log(err));

app.use('/api/recipes', recipes);


const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log (`Server started on port ${port}`));