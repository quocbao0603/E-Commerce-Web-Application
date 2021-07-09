const express = require('express')
const app = express()

const morgan = require('morgan')
app.use(morgan('dev'));

app.use(express.urlencoded({
    extended: true
}));

app.use('/public/', express.static('public'))

require('./middlewares/session.mdw')(app);
require('./middlewares/view.mdw')(app);
require('./middlewares/locals.mdw')(app);
require('./middlewares/route.mdw')(app);


const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})