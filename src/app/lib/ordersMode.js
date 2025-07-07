const { default: mongoose } = require("mongoose");

const orderModel = new mongoose.Schema({
    user_id:mongoose.Schema.Types.ObjectId,
    foodItemIds: String,
    resto_id: mongoose.Schema.Types.ObjectId,
    deliveryBoy_id: mongoose.Schema.Types.ObjectId,
    status: String,
    amount: String,
});

export const ordersSchema= mongoose.models.orders || mongoose.model('orders', orderModel);