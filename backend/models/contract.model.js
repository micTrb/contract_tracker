const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contractSchema = new Schema({
  contractName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});


const Contract = mongoose.model('Contract', contractSchema);

module.exports = Contract;
