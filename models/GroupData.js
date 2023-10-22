import mongoose from 'mongoose';

const GroupSchema = new mongoose.Schema({
  id: { type: String, unique: true, required: true },
  antilink: { type: Boolean, default: false },
  antiword: { type: Boolean, default: false },
  nsfw: { type: Boolean, default: false },
  autoreact: { type: Boolean, default: false },
  bangroup: { type: Boolean, default: false },
  chatBot: { type: Boolean, default: false },
  botSwitch: { type: Boolean, default: true },
  switchNSFW: { type: Boolean, default: false },
  switchWelcome: { type: Boolean, default: false },
});

const GroupData = mongoose.model("GroupData", GroupSchema);

export default GroupData;
