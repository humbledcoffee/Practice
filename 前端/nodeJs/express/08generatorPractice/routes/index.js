var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/a', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('记账列表')
});

//添加记录
router.get('/b', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('创建账单')
});

module.exports = router;
