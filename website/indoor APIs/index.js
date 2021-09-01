const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv/config')


//Middlewares
app.use(cors());
app.use(bodyParser.json());

// Import Routes
const postsRoute = require('./routes/posts');
const roomDataRoute = require('./routes/getRoomData');
const factoryDataRoute = require('./routes/getFactoryData');

app.use('/posts', postsRoute);
app.use('/getRoomData', roomDataRoute);
app.use('/getFactoryData', factoryDataRoute);

//ROUTES
app.get('/', (req,res) =>{
    res.send('We are on home');
});



//Connect To DB
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    () => console.log('connected to the DB!')
);
mongoose.connection
    .once('open', () => console.log('Connected'))
    .on('error', (error) => {
        console.log("Your Error Message: ", error);
    });

// How do we start listening to the server
app.listen(3000);