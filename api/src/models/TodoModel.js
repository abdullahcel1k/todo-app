const mongoose = require('mongoose');
const StatusEnums = require('../enums/StatusEnums');
const PriorityEnums = require('../enums/PriorityEnums');

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    default: PriorityEnums.MEDIUM // defaul priority status
  },
  status: {
    type: String,
    default: StatusEnums.ANALYSIS
  },
  isDelete: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model('Todos', TodoSchema);
