const express = require('express');
const productModel = require('../models/product.model');

const router = express.Router();


//liet ke danh sach san pham
router.get('/byCat/:id', async function(req, res) {
    //console.log(`local `);
    // console.log(res.locals.lcCategories);
    const catID = req.params.id || 0;
    const list = await productModel.findByCatID(catID);
    for (c of res.locals.lcCategories) {
        if (c.CatID == catID) {
            c.IsActive = true;
            break;
        }
    }
    //console.log(list);
    res.render('vwProduct/byCat', {
        products: list,
        empty: list.length === 0
    });
});
router.get('/details/:id', async function(req, res) {
    //console.log(`local `);
    // console.log(res.locals.lcCategories);
    const proID = req.params.id || 0;
    /* const list = await productModel.findByCatID(catID);
    for (c of res.locals.lcCategories) {
        if (c.CatID == catID) {
            c.IsActive = true;
            break;
        }
    } */
    //console.log(list);
    const product = await productModel.findByID(proID);
    if (product == null) {
        return res.redirect('/');
    }
    res.render('vwProduct/details', {
        product: product
    });
});
module.exports = router;