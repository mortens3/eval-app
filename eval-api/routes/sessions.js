var express = require('express');
var router = express.Router();
var Session = require('./../models/session');

router.route('/sessions')
    // create a session accessed at POST /api/sessions
    .post(function (req, res) {
        var session = new Session();
        session.name = req.body.name;
        session.slot = req.body.slot;
        session.presenter = req.body.presenter;
        session.level = req.body.level;
        session.abstract = req.body.abstract;
        session.event = req.body.event;
        session.save(function (err) {
            if (err)
                res.send(err);
            res.json({ message: 'session created!' });
        });
    })
    // get all the sessions accessed at GET /api/sessions
    .get(function (req, res) {
        Session.find(function (err, sessions) {
            if (err)
                res.send(err);
            res.json(sessions);
        });
    });

router.route('/sessions/:session_id')
    // get the session with that id accessed at GET /api/sessions/:session_id
    .get(function (req, res) {
        Session.findById(req.params.session_id, function (err, session) {
            if (err)
                res.send(err);
            res.json(session);
        });
    })
    // update the session with this id accessed at PUT /api/sessions/:session_id
    .put(function (req, res) {

        Session.findById(req.params.session_id, function (err, session) {
            if (err)
                res.send(err);
            session.name = req.body.name;
            session.slot = req.body.slot;
            session.presenter = req.body.presenter;
            session.level = req.body.level;
            session.abstract = req.body.abstract;
            session.event = req.body.event;
            session.save(function (err) {
                if (err)
                    res.send(err);
                res.json({ message: 'session updated!' });
            });
        });
    })
    // delete the session with this id accessed at DELETE /api/sessions/:session_id
    .delete(function (req, res) {
        Session.remove({
            _id: req.params.session_id
        }, function (err, session) {
            if (err)
                res.send(err);
            res.json({ message: 'Successfully deleted' });
        });
    });

module.exports = router