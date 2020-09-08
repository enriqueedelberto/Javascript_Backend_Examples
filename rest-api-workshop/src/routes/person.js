let express = require('express');
let router = express.Router();

//QuryString:
router.get('/person', (req, res) => {
    if (req.query.name) {
        res.send(`You have requested a person  ${req.query.name}`);
        return;
    }
    res.send('You have requested a person');
});

//Property params on the request
router.get('/person/:name', (req, res) => {
    res.send(`You have requested a person  ${req.params.name}`);
});


router.get('/error', (req, res) => {
    throw new Error('This is a forced error.');
});



module.exports = router;