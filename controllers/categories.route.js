const express = require('express');
const categoriesModel = require('../models/categories.model');

const router = express.Router();


//liet ke danh sach
router.get('/', async function(req, res) {
    const list = await categoriesModel.all();
    console.log(list);
    res.render('vwCategories/index', {
        categories: list,
        empty: list.length === 0
    });
})

router.get('/add', function(req, res) {
        res.render('vwCategories/add')
    })
    //doc/ghi await
router.post('/add', async function(req, res) {
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

//edit danh sach
router.get('/edit', async function(req, res) {
    const id = req.query.id;
    const category = await categoriesModel.findByID(id);
    if (category == null) {
        res.redirect('/admin/categories');
    }
    //console.log(id);
    res.render('vwCategories/edit', {
        category
    });
})

router.post('/patch', async function(req, res) {
    //console.log(req.body);
    //const update_category = {
    //    CatID: req.body.txtCatID, 
    //    CatName: req.body.txtCatName
    //}
    //bat buoc phai co await de co ket qua res.
    await categoriesModel.patch(req.body);
    //console.log('TEst Category: ' + update_category.CatID + update_category.CatName);
    res.redirect('/admin/categories');
})
router.post('/del', async function(req, res) {
    //console.log(req.body);
    await categoriesModel.del(req.body.CatID);
    //console.log(rs);
    res.redirect('/admin/categories');
})

module.exports = router;