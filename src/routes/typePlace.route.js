const express = require('express');
const router = express.Router();
const typePlaceController = require('../controllers/typePlace.controller');

router.get('/', typePlaceController.getTypePlace);
router.post('/', typePlaceController.createTypePlace);

module.exports = router;