
const express = require('express')
const exphbs  = require('express-handlebars');


const app = express()
const morgan = require('morgan')


app.use(morgan('dev'))
app.engine('hbs', exphbs({
    //defaultLayout: 'main.hbs'
    defaultLayout: 'bs4.hbs'
}));

app.set('view engine', 'hbs');
app.get('/', function (req, res) {
    res.render('home');
}


app.get('/bs4', function(req, res){
    res.sendFile(__dirname + '/bs4.html')
})

const port = 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})