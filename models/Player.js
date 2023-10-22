import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
  id: { type: String, unique: true, required: true },
  name: { type: String },
  inventory: {
    wood: { type: Number, required: true },
    stone: { type: Number, required: true },
    iron: { type: Number, required: true },
    diamonds: { type: Number, required: true },
    goldenApple: { type: Number, required: true },
    diamondpickaxe: { type: Number, required: true },
    ironpickaxe: { type: Number, required: true },
    stonepickaxe: { type: Number, required: true },
    woodenaxe: { type: Number, required: true },
  },
});

const Player = mongoose.model("Player", playerSchema);

export default Player;
