const express = require('express');
const router = express.Router();
const Event = require('../models/event');

//For getting all data form event collection
router.get('/', (req, res) => {
    Event.find().then(data => {
        res.send({
            status: "Success",
            data: data
        })
    }).catch(err => {
        [
            res.send({
                status: "Failure",
                error: err
            })
        ]
    })
});


//For getting the id from name
router.get('/name/:name', (req, res) => {
    Event.findOne({ place: req.params.name }).then(data => {
        res.send({
            status: "Success",
            data: data
        })
    }).catch(err => {
        [
            res.send({
                status: "Failure",
                error: err
            })
        ]
    })
});


//Saving a event object into events collection
router.post('/', (req, res) => {
    console.log(req.body)
    let event = new Event(req.body);
    event.save().then(data => {
        res.send({
            status: "Success",
            data: data
        })
    }).catch(err => {
        [
            res.send({
                status: "Failure",
                error: err
            })
        ]
    })
});


//Deleting a object/event from the collection
router.delete('/:id', (req, res) => {
    [
        Event.findByIdAndDelete(req.params.id).then(data => {
            res.send({
                status: "Success",
                data: data
            })
        }).catch(err => {
            [
                res.send({
                    status: "Failure",
                    error: err
                })
            ]
        })
    ]
});

module.exports = {
    eventsController: router
}