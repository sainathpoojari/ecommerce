const mongoose = require('mongoose');
const { stringify } = require('postcss');

const OrderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    products: [{ productId: { type: String }, quantity: { type: Number, defaut: 1 } }],
    address: { type: String, required: true },
    amount : { type: Number, required: true },
    status: { type: String, required: true ,default:'pending'},
},{timestamps:true});
mongoose.models= {}
export default mongoose.model("Order",OrderSchema);