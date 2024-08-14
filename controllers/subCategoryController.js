const SubCategory = require('../models/SubCategory');

exports.createSubCategory = async (req, res) => {
    try {
        const subCategory = await SubCategory.create(req.body);
        res.status(201).json(subCategory);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getSubCategories = async (req, res) => {
    try {
        const subCategories = await SubCategory.find();
        res.status(200).json(subCategories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getSubCategoryById = async (req, res) => {
    try {
        const subCategory = await SubCategory.findById(req.params.id);
        if (!subCategory) return res.status(404).json({ message: 'SubCategory not found' });
        res.status(200).json(subCategory);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateSubCategory = async (req, res) => {
    try {
        const subCategory = await SubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!subCategory) return res.status(404).json({ message: 'SubCategory not found' });
        res.status(200).json(subCategory);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
