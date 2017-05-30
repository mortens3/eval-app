var express = require('express');
var router = express.Router();
var Bear = require('./../models/bear');

router.route('/bears')
    // create a bear accessed at POST /api/bears
    .post(function (req, res) {
        var bear = new Bear();
        bear.name = req.body.name;
        bear.save(function (err) {
            if (err)
                res.send(err);
            res.json({ message: 'Bear created!' });
        });
    })
    // get all the bears accessed at GET /api/bears
    .get(function (req, res) {
        Bear.find(function (err, bears) {
            if (err)
                res.send(err);
            res.json(bears);
        });
    });

router.route('/bears/:bear_id')
    // get the bear with that id accessed at GET /api/bears/:bear_id
    .get(function (req, res) {
        Bear.findById(req.params.bear_id, function (err, bear) {
            if (err)
                res.send(err);
            res.json(bear);
        });
    })
    // update the bear with this id accessed at PUT /api/bears/:bear_id
    .put(function (req, res) {

        Bear.findById(req.params.bear_id, function (err, bear) {
            if (err)
                res.send(err);
            bear.name = req.body.name;
            bear.save(function (err) {
                if (err)
                    res.send(err);
                res.json({ message: 'Bear updated!' });
            });
        });
    })
    // delete the bear with this id accessed at DELETE /api/bears/:bear_id
    .delete(function (req, res) {
        Bear.remove({
            _id: req.params.bear_id
        }, function (err, bear) {
            if (err)
                res.send(err);
            res.json({ message: 'Successfully deleted' });
        });
    });

module.exports = router