const express = require('express')
const app = express()
const handlebars = require('express-handlebars');

app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.send('Hello World')

})


app.listen(7777, () => {
    console.log("server is ranning")
});
//