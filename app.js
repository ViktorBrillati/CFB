const express = require("express");
const ejs = require("ejs");
const bodyParser = require('body-parser');
const port = 3000;

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("public/images"));

app.get('/', (req,res) => {
    res.render('main');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/volunteer', (req,res) => {
    res.render('volunteer');
});

app.listen(process.env.PORT || port, () => {
    console.log(`App listening on port ${port}`);
});
