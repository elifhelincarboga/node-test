const mongoose = require("mongoose");
const Site = require('../models/site');

exports.getWebsites = async (req, res, next) => {
    try {
      const sites = await Site.find();

      res.status(200).json({
          site: sites
      });
    } catch (error) {
        res.status(500).json({ 
            error: error 
        });
    }
}