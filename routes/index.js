var express = require('express');
var router = express.Router();
'use strict';
/* GET bootstrap template */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
    //res.send('there will be bootstrap template');
});

router.get('/template/:selectedTemplate', function (req, res) {
    res.render('bootstrap3-templates/' + req.params.selectedTemplate, {
        'pathToAssets': '/bootstrap-3.3.1',
        'pathToSelectedTemplateWithinBootstrap' : '/bootstrap-3.3.1/docs/examples/' + req.params.selectedTemplate
    });
});

router.get('/about', function (req, res) {
    res.render('about', {
        'pathToAssets': '/bootstrap-3.3.1',
        'pathToSelectedTemplateWithinBootstrap' : '/about'
    });
});

module.exports = router;

