const db = require('../utils/db');


module.exports = {
    all() {
        return db('products');
    },
    add(product) {
        // list.push(product)
        return db('products').insert(product);
    },

    findByCatID(catId) {
        return db('products').where('CatID', catId);
    },

    async findByID(id) {
        const rows = await db('products').where('ProID', id);
        if (rows.length === 0) return null;
        return rows[0];
    },

    patch(product) {
        const id = product.ProID;
        delete product.ProID;
        return db('products')
            .where('ProID', id)
            .update(product)
    },

    del(id) {
        return db('products')
            .where('ProID', id)
            .del();
    }
};