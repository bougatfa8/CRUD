const express = require('express');
const { Addproject, FindAllprojects, FindSinglproject, Updateproject, Deleteproject } = require('../controllers/projects.controller');
const router = express.Router()


/* add project */
router.post('/projects', Addproject)

/* find all projects */
router.get('/projects', FindAllprojects)

/* find single project */
router.get('/projects/:id', FindSinglproject)

/* add project */
router.put('/projects/:id', Updateproject)

/* add project */
router.delete('/projects/:id', Deleteproject)

module.exports = router;