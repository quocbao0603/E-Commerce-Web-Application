const db = require('../utils/db');

const list = [
    {CatID: 1, CatName: 'Les1'},
    {CatID: 2, CatName: 'Les2'},
    {CatID: 3, CatName: 'Les3'},
    {CatID: 4, CatName: 'Les4'}
];
module.exports = {
    all(){
        return db('categories');
    },
    add(category){
       // list.push(category)
       return db('categories').insert(category);
    }
};
    
