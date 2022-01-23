const express = require('express');

const router = express.Router();
const measureController = require('../controllers/measures')

router.get("/", measureController.getAllMeasure);

router.get("/:measureId", measureController.getMeasure);

router.post("/", measureController.createMeasure);

router.delete("/:measureId", measureController.deleteMeasure)

router.patch("/:measureId", measureController.updateMeasure)

module.exports = router;