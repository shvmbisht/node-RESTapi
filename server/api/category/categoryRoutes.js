const router = require('express').Router();
const logger = require('../../util/logger');


router.route('/')
    .get(function (req, res){
        logger.log('Hey from category');
        res.send({ok: true});
    });

    module.exports = router;