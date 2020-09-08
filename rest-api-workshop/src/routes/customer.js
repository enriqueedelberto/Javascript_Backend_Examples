let CustomerModel = require('../models/customer.model');
let express = require('express');

let router = express.Router();

//Create a new customer
//localhost:3000/customer
router.post('/customer', (req, res) => {
    //req.body
    if (!req.body) {
        return res.status(400).send('Request body is missing');

    }

    if (!req.body.email) {
        //DO something
    }

    let model = new CustomerModel(req.body);
    model.save()
        .then(doc => {
            if (!doc || doc.length === 0) {
                return res.status(500).send(doc);
            }
            res.status(201).send(doc);
        })
        .catch(error => {
            res.status(500).json(error);
        })


});

router.get('/customer', (req, res) => {
    if (!req.query.email) {
        return res.status(400).send('Request query is missing');
    }

    CustomerModel.findOne({
            email: req.query.email
        })
        .then(doc => {
            res.json(doc);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});


router.put('/customer', (req, res) => {

    if (!req.query.email) {
        return res.status(400).send('Request query is missing');
    }

    CustomerModel.findOneAndUpdate({
            email: req.query.email
        }, req.body, {
            new: true
        })
        .then(doc => {
            res.json(doc);
        })
        .catch(err => {
            res.status(500).json(err);
        });

});

router.delete('/customer', (req, res) => {

    if (!req.query.email) {
        return res.status(400).send('Request query is missing');
    }

    CustomerModel.findByIdAndRemove({
            email: req.query.email
        }, req.body, {
            new: true
        })
        .then(doc => {
            res.json(doc);
        })
        .catch(err => {
            res.status(500).json(err);
        });

});

module.exports = router;