const express = require("express");

const router = express.Router();

var burger = require("../models/burger.js");

router.get("/", (req, res) => { 
    burger.all((data) => {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.create([
        "name", "devoured"
    ], [
        req.body.name, req.body.devoured
    ], (result) => {
        res.json({ id: result.insertID });
    });
});

router.put("/api/burgers/:id", (req, res) => { 
    var condition = "id = " + req.params.id;

    burger.update({devoured: req.body.devoured
    }, condition, (result) => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", (req, res) => {
    let condition = "id = " + req.params.id;
   
    burger.delete(condition, (result) => {
        if (result.affectedRows == 0) { 
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router; 