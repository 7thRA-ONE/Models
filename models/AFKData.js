import mongoose from 'mongoose';

const AFKSchema = new mongoose.Schema({
  id: { type: String, unique: true, required: true },
  afk: { type: Boolean, default: false },
  afkReason: { type: String, default: "null" },
}); 

const AFKData = mongoose.model("AFKData", AFKSchema);

export default AFKData;
