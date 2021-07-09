module.exports = function auth(req, res, next) {
    if (req.session.auth === false) {
        req.session.retURL = req.originalURL;
        return res.redirect('/account/login');
    }
    next();
}