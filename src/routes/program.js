const express = require('express');
const programController = require('../controllers/administrator/programController');

const authentication = require('../middlewares/authentication');

const router = express.Router();

router.get('/administrator/programs/', authentication, programController.index);
router.post('/administrator/programs/', authentication, programController.create);
router.put('/administrator/programs/:id/', authentication, programController.update);
router.delete('/administrator/programs/:id/', authentication, programController.destroy);

module.exports = router;