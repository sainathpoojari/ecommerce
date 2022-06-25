const mongoose = require('mongoose');
const { stringify } = require('postcss');

const UserSchema = new mongoose.Schema({
    nmae: { type: String, required: true },
    email: { type: String, required: true , unique:true },
    password: { type: String, required: true },
},{timestamps:true});
mongoose.models= {}
export default mongoose.model("User",UserSchema);