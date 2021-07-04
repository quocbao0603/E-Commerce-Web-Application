const db = require('../utils/db');

const list = [
    { CatID: 1, CatName: 'Les1' },
    { CatID: 2, CatName: 'Les2' },
    { CatID: 3, CatName: 'Les3' },
    { CatID: 4, CatName: 'Les4' }
];
module.exports = {
    all() {
        return db('categories');
    },
    allWithDetails() {
        const sql = `
        select c.*, count(p.ProID) as ProductCount
        from categories c left join products p on c.CatID = p.CatID
        GROUP BY c.CatID, c.CatName
        `;
        return db.raw(sql);
    },
    add(category) {
        // list.push(category)
        return db('categories').insert(category);
    },
    async findByID(id) {
        const rows = await db('categories').where('CatID', id);
        if (rows.length === 0) return null;
        return rows[0];
    },

    patch(category) {
        const id = category.CatID;
        delete category.CatID;
        return db('categories')
            .where('CatID', id)
            .update(category)
    },

    del(id) {
        return db('categories')
            .where('CatID', id)
            .del();
    }
};