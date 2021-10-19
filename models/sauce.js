const express = require('express');
const router = express.Router();
 
const Sauses = require('../module/sauses');

router.post('/', (req, res, next) => {
    const Sauses = new Sauses({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        userId: req.body.userId
    });
    Sauses.save().then(
        () => {
            res.status(201).json({
                message: 'Post saved successfully'
            })
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
});



module.exports = router;