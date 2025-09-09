const express = require('express');
const {
  getCourses,
  getCourse,
  createCourse,
  deleteCourse
} = require('../controllers/courseController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.route('/')
  .get(getCourses)
  .post(protect, authorize('admin'), createCourse);

router.route('/:id')
  .get(getCourse)
  .delete(protect, authorize('admin'), deleteCourse);

module.exports = router;