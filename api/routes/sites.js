const express = require('express');

const router = express.Router();
const siteController = require('../controllers/sites')

router.get("/", siteController.getWebsites)

module.exports = router;