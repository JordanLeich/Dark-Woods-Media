const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    condition: { type: String, required: true },
    description: { type: String },
    genre: { type: String },
    imageUrl: { type: String, required: true },
    stock: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Movie', MovieSchema);
