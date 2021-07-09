const exphbs = require('express-handlebars');
const numeral = require('numeral');

const hbs_section = require('express-handlebars-sections');

module.exports = function(app) {
    app.set('view engine', 'hbs');
    app.engine('hbs', exphbs({
        //defaultLayout: 'main.hbs'
        defaultLayout: 'bs4.hbs',
        helpers: {
            section: hbs_section(),
            format_number(val) {
                return numeral(val).format('0,0');
            }
        }
    }));
}