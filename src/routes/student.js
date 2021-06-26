const express = require('express');
const studentController = require('../controllers/studentController');
const administratorStudentController = require('../controllers/administrator/studentController');
const authentication = require('../middlewares/authentication');

const router = express.Router();

router.post('/students', studentController.create);
router.get('/administrator/students', authentication, administratorStudentController.index);
router.put('/administrator/students/:id', authentication, administratorStudentController.update);
router.get('/administrator/students/:id', authentication, administratorStudentController.show);

module.exports = router;