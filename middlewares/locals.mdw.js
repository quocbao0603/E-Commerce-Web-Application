const categoriesModel = require('../models/categories.model');
module.exports = function(app) {
    app.use(async function(req, res, next) {
        const raw_data = await categoriesModel.allWithDetails();
        const list = raw_data[0];
        //list[1].IsActive = true;
        res.locals.lcCategories = list;
        console.log(res.locals.lcCategories);
        next();
    })
}