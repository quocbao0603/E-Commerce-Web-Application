const express = require('express');
const categoriesModel = require('../models/categories.model');

const router = express.Router();


//liet ke danh sach
router.get('/', async function(req, res){
    const list = await categoriesModel.all();
    console.log(list);
    res.render('vwCategories/index', {
        categories: list,
        empty: list.length === 0
    }); 
})

router.get('/add', function(req, res){
    res.render('vwCategories/add')
})
//doc/ghi await
router.post('/add', async function(req, res){
    //console.log(req.body);
    const new_category = {
        //CatID: -1, 
        CatName: req.body.txtCatName
    }
    const rs = await categoriesModel.add(new_category);
    //console.log(rs);
    res.render('vwCategories/add');
})
//common js
//es module <=> import

module.exports = router;
