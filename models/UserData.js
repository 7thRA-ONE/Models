import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  id: { type: String, unique: true, required: true },
  ban: { type: Boolean, default: false },
  afk: { type: Boolean, default: false },
  afkReason: { type: String, default: "null" }, 
  name: { type: String },
  addedMods: { type: Boolean, default: false },
});

const UserData = mongoose.model("UserData", UserSchema);

export default UserData;
