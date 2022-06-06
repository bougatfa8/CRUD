const express = require('express');
const { AddDep, FindAllDep, FindSinglDep, UpdateDep, DeleteDep } = require('../controllers/deps.controller');
const router = express.Router()


/* add Dep */
router.post('/deps', AddDep)

/* find all deps */
router.get('/deps', FindAllDep)

/* find single Dep */
router.get('/deps/:id', FindSinglDep)

/* add Dep */
router.put('/deps/:id', UpdateDep)

/* add Dep */
router.delete('/deps/:id', DeleteDep)

module.exports = router;