const mongoose = require("mongoose");
const Measure = require('../models/measure');
const datesHelper = require('../methods/helper');

exports.getMeasures = async (req, res, next) => {
    const dates =  datesHelper.getDates(req.query.startDate, req.query.endDate)
    try {
        const measures = await Measure.find({ 
            navigation_started_at: { 
                $gte: dates.startDate, 
                $lte: dates.endDate 
            } 
        }).sort({ navigation_started_at: 1 });
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