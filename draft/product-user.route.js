const express = require('express');
const productModel = require('../models/product.model');

const router = express.Router();


//xem ds san pham
router.get('/byCat', async function(req, res){
    const CatID = req.query.ID;
    const list = await productModel.findByCatID(CatID);
    console.log(list);
    res.render('vwProduct/byCat', {
        product: list,
        empty: list.length === 0
    }); 
})

module.exports = router;
