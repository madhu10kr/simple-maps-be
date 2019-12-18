const express = require('express');
const router = express.Router();
const {eventsController} = require('../app/controllers/events_controller');

router.use('/api',eventsController);

module.exports = {
    router
}