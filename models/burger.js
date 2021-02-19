//import orm
var orm = require("../config/orm.js");

//burger function for specific burger input
var burger = {
    //all
    selectAll: (cb) => {
        orm.selectAll('burgers', (result) => {
            cb(result);
        });
    },

    //create
    insertOne: (cols, vals, cb) => {
        orm.insertOne('burgers', cols, vals, (result) => {
            cb(result);
        });
    },

    //update
    updateOne: (objColVals, condition, cb) => {
        orm.updateOne('burgers', objColVals, condition, (result) => {
            cb(result);
        });
    }
};

//export burger
module.exports = burger;