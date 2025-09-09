const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Purchase Have belong to a user']
  },
  courseId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Course',
    required: [true, 'Purchase Have to for a course']
  },
  amount: {
    type: Number,
    required: [true, 'Purchase Have to an amount']
  },
  date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Prevent duplicate purchases
purchaseSchema.index({ userId: 1, courseId: 1 }, { unique: true });

module.exports = mongoose.model('Purchase', purchaseSchema);