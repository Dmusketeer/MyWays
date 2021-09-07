const express = require('express');
const bodyParser = require('body-parser')
const ejs = require('ejs');
// const path = require('path');


const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

const Port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const items = [];
const var1 = "take bath"
app.get('/', (req, res) => {
    res.render('index', {
        ejes: items
    })
})

app.post('/', (req, res) => {
    var item = req.body.ele1;
    items.push(item);
    res.redirect('/');
})

app.listen(Port, () => {
    console.log('listening on port ' + Port);
})