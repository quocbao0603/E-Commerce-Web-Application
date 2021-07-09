const express = require('express');
const bcrypt = require('bcryptjs');
const moment = require('moment');
const userModel = require('../models/user.model')
const router = express.Router();

const auth = require('../middlewares/auth.mdw')

router.get('/editor', function(req, res) {
    // console.log(req.session.authUser);
    // console.log(req.session.auth);
    res.render('vwDemo/editor')
});

router.post('/editor', function(req, res) {
    console.log(req.body.content);
    res.render('vwDemo/editor')
});


router.get('/upload', function(req, res) {
    res.render('vwDemo/upload')
});


module.exports = router;