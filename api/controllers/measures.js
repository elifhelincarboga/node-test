const mongoose = require("mongoose");
const Measure = require('../models/measure');
const Site = require('../models/site');
const datesHelper = require('../methods/helper');

exports.getMeasures = async (req, res, next) => {
    const dates =  datesHelper.getDates(req.query.startDate, req.query.endDate)
    try {

        const site = await Site.findOne({
            _id: req.query.id.toObjectId()
        })
        const measures = await Measure.find({ 
            date: { 
                $gte: dates.startDate, 
                $lte: dates.endDate 
            },
            siteUrl: site.url
        }).sort({ date: 1 });
        res.status(200).json({
            measure: measures
        });
    } catch (error) {
        res.status(500).json({ 
            error: error 
        });
    }
}

exports.createMeasure = async (req, res, next) => {
    let data = req.body

    if (!data.siteUrl && !data.date) {
        return res.status(400).json({
            message: "URL or date is missing!",
        })
    }

    const measure = new Measure({
        siteUrl: data.siteUrl,
        ttfb: data.ttfb,
        fcp: data.fcp,
        domLoad: data.domLoad,
        windowLoad: data.windowLoad,
        date: data.date,
    })

    try {
        const site = await Site.find({
            url: { $eq: data.siteUrl }
        })
        if (site.length === 0) {
            const site = new Site({
                url: data.siteUrl,
            })
            const savedSite = await site.save();
        }

        const savedMeasure = await measure.save();
        res.status(200).json({
            message: "New measure created",
            measure: savedMeasure
        });
    } catch (error) {
        res.status(500).json({ 
            error: error 
        });
    }
}