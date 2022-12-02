//--Server JS--
const express = require('express');
const path = require('path'); 
const cors = require('cors')  
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser')
dotenv.config({path: 'backend/.env'})
const MongoDbStore = require('connect-mongo')
var bodyParser = require('body-parser')
const session = require('express-session')
const flash = require('express-flash')

const app = express();

const PORT = process.env.PORT || 4000;
const connection = mongoose.connect(process.env.Mongoose_connect,{useNewUrlParser: true, useUnifiedTopology: true}).then((response)=>{
    console.log('MongoDb connected');
});
app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`);
})

//session create in mongodb 
app.use(session({
    secret: process.env.SECRET_key,
    resave: false, 
    store: MongoDbStore.create({
        mongoUrl: process.env.Mongoose_connect
    }),
    saveUninitialized: false,
    cookie: {maxAge: 1000*60*60*6}

}))
app.use(flash())

//app middlewares
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))   //used to handle cross-site request on 2 locals
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());

//required api.js file and passed app to there
require('./routes/api')(app)
