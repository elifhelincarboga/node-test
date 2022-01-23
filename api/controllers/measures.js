const mongoose = require("mongoose");
const Measure = require('../models/measure')

exports.getAllMeasure = async (req, res, next) => {
    try {
        const measures = await Measure.find();
        res.status(200).json({
            measures: measures
        });
    } catch (error) {
        res.status(500).json({ 
            error: error 
        });
    }
}

exports.getMeasure = async (req, res, next) => {
    try {
        const measure = await Measure.findById(req.params.measureId);
        res.status(200).json({
            measure: measure
        });
    } catch (error) {
        res.status(500).json({ 
            error: error 
        });
    }
}

exports.createMeasure = async (req, res, next) => {
    const measure = new Measure({
        title: req.body.title,
        description: req.body.description
    });

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

exports.deleteMeasure = async (req, res, next) => {
    try {
        const removedMeasure = await Measure.remove({_id: req.params.measureId});
        res.status(200).json({
            measure: removedMeasure
        });
    } catch (error) {
        res.status(500).json({ 
            error: error 
        });
    }
}

exports.updateMeasure = async (req, res, next) => {
    try {
        const updatedPost = await Measure.updateOne(
            {_id: req.params.measureId},
            {$set: {title: req.body.title}}
        );
        res.status(200).json({
            measure: updatedPost
        });
    } catch (error) {
        res.status(500).json({ 
            error: error 
        });
    }
}