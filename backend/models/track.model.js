
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trackSchema = new Schema({
  title: { type: String, required: true },
  version: { type: String },
  artist: { type: String },
  isrc_code: { type: String, required: true },
  p_line: { type: String },
  aliases: { type: Array },
  contractName: { type: String, ref: 'Contract' },
}, {
  timestamps: true,
});

const Track = mongoose.model('Track', trackSchema);

module.exports = Track;
