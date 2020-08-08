const express = require('express');
const router = express.Router();
router.get('/reg', (req, res)=>{
    res.send('Registration page');
});

router.get('/auth', (req, res)=>{
    res.send('Auth page');
});

router.get('/dashboard', (req, res)=>{
    res.send('Dashboard user');
});

module.exports = router;