const mongoose = require('mongoose');
const validator = require('validator');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a course title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please provide a course description'],
    maxlength: [1000, 'Description cannot be more than 1000 characters']
  },
  price: {
    type: Number,
    required: [true, 'Please provide a course price'],
    min: [0, 'Price cannot be negative']
  },
  instructor: {
    type: String,
    required: [true, 'Please provide an instructor name'],
    trim: true,
    maxlength: [50, 'Instructor name cannot be more than 50 characters']
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Course', courseSchema);