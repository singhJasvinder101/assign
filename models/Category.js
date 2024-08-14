const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String },
    taxApplicability: { type: Boolean, default: false },
    tax: { type: Number, default: 0 },
    taxType: { type: String, enum: ['percentage', 'fixed'] },
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
