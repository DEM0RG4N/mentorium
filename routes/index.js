const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const path = require('path');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('index'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>{
  res.render('sidebar/index', {
    user: req.user,
    layout: 'sidebar/layout'
  });
});


module.exports = router;
