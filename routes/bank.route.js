const express = require('express');
const { AddBank, FindAllBank, FindSinglBank, UpdateBank, DeleteBank } = require('../controllers/banks.controller');
const router = express.Router()


/* add Bank */
router.post('/banks', AddBank)

/* find all banks */
router.get('/banks', FindAllBank)

/* find single Bank */
router.get('/banks/:id', FindSinglBank)

/* add Bank */
router.put('/banks/:id', UpdateBank)

/* add Bank */
router.delete('/banks/:id', DeleteBank)

module.exports = router;