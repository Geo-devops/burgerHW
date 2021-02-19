//require
var express = require("express");
var burger = require("../models/burger.js");

//create router
var router = express.Router();

//get
router.get('/', (req, res) => {
    burger.selectAll((data) => {
        var burgersObject = {
            burgers: data
        };
        console.log(burgersObject);
        res.render('index', burgersObject);
    });
});

//post
router.post('/api/burgers', (req, res) => {
    burger.insertOne([
        'burger_name'
    ], [
        req.body.burger_name
    ], (result) => {
        res.json({ id: result.insertId });
    });
});

//put
router.put('/api/burgers/:id', (req, res) => {
    console.log(req.body);
    var condition = 'id = ' + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, (result) => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//export router
module.exports = router;