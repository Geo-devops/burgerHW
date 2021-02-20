
var connection = require("../config/connection.js");

function printQuestionMarks(num) { 
    var arr = [];

    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
}
  

function objToSql(ob) { 
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
            value = "'" + value + "'";
        }
        
        arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}


var orm = {
   
    selectAll: (tableInput, cb) => {
        var queryAll = "select * from " + tableInput + ";";
        connection.query(queryAll, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    

   
    insertOne: (table, cols, vals, cb) => {
        var queryAdd = "insert into " + table;

        queryAdd += " (";
        queryAdd += cols.toString();
        queryAdd += ") ";
        queryAdd += "values (";
        queryAdd += printQuestionMarks(vals.length);
        queryAdd += ") ";

        console.log(queryAdd);

        connection.query(queryAdd, vals, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },


   
    updateOne: (table, objColVals, condition, cb) => {
        var queryUpdate = "update " + table;

        queryUpdate += " set ";
        queryUpdate += objToSql(objColVals);
        queryUpdate += " where ";
        queryUpdate += condition;

        console.log(queryUpdate);
        connection.query(queryUpdate, (err, result) => {
            if (err) {
                throw err;
            }
            console.log(result);
            cb(result);
        });
    }
};


module.exports = orm;