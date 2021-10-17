const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config();
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
// mongoose db
const Db_password = process.env.MONGO_PASSWORD;
const DB_URL = `mongodb+srv://dheeraj:${Db_password}@atlastesting.1itdz.mongodb.net/MypassMan?retryWrites=true&w=majority`;
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.Promise = global.Promise;
mongoose.connection.once('open', () => {
    console.log('DataBase Connected...');
})
mongoose.connection.on('error', (error) => {
    console.log('Connection Error...')
})

// routes

app.get('/', (req, res) => {
    res.render('index', { name: "Dheeraj Tiwari" });
})
app.get('/signup', (req, res) => {
    res.render('signup');
})
//Home routes

app.listen(port, () => {
    console.log(`server is listening on ${port}`);
})



