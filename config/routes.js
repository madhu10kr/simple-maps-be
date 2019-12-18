const express = require('express');
const router = express.Router();
const {eventsController} = require('../app/controllers/events_controller');

router.use('/api',eventsController);
router.get('/',(req,res) => {
    res.send('Working')
})
module.exports = {
    router
}