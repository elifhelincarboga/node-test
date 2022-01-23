const express = require('express');

const router = express.Router();
const measureController = require('../controllers/measures')

router.get("/", measureController.getMeasures);

router.post("/", measureController.createMeasure);

module.exports = router;