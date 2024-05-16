const express = require('express');
const categoryController = express.Router();
const makeSlug = require("../helpers/slugify");
const verifyToken = require("../middleware/auth");
const Category = require("../models/category");

categoryController.get('/categories', verifyToken, (req, res) => {
    try {
        if(req.user) {
            Category.find().then((categories) => {
                res.status(200).send(categories);
            }).catch((err) => {
                res.status(400).send(err);
            });
        } else {
            return res.status(401).json({ message: req.message });
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

categoryController.get('/categories/:slug', verifyToken, (req, res) => {
    try {
        if(req.user) {
            Category.findOne({slug: req.params.slug}).then((category) => {
                res.status(200).send(category);
            }).catch((err) => {
                res.status(400).send(err);
            });
        } else {
            return res.status(401).json({ message: req.message });
        }    
    } catch (error) {
        res.status(500).send(error);
    }
});

categoryController.post('/categories', verifyToken, (req, res) => {
    try {
        if(req.user) {
            const category = new Category({
                name: req.body.name,
                slug: makeSlug(req.body.name),
                description: req.body.description,
                created_by: req.user.id
            });

            category.save().then((category) => {
                res.status(200).send(category);
            }).catch((err) => {
                res.status(400).send(err);
            });
        } else {
            return res.status(401).json({ message: req.message });
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = categoryController;