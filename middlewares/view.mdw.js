const exphbs = require('express-handlebars');
const numeral = require('numeral');

module.exports = function(app) {
    app.set('view engine', 'hbs');
    app.engine('hbs', exphbs({
        //defaultLayout: 'main.hbs'
        defaultLayout: 'bs4.hbs',
        helpers: {
            format_number(val) {
                return numeral(val).format('0,0');
            }
        }
    }));
}