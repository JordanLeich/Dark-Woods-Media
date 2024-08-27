const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [{
        movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
        quantity: { type: Number, required: true }
    }],
    totalPrice: { type: Number, required: true },
    shippingAddress: { type: String, required: true },
    paymentStatus: { type: String, default: 'Pending' },
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
