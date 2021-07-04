module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('home');
    });


    app.get('/bs4', function(req, res) {
        res.sendFile(__dirname + '/bs4.html')
    });

    app.use('/admin/categories/', require('../controllers/categories.route'));
    app.use('/products/', require('../controllers/product-user.route'));

}