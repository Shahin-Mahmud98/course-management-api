const Course = require('../models/Course');
const { validateCourseInput } = require('../middleware/validation');

// Get all courses
exports.getCourses = async (req, res, next) => {
  try {
    const courses = await Course.find().populate('createdBy', 'name email');

    res.status(200).json({
      success: true,
      count: courses.length,
      data: courses
    });
  } catch (error) {
    next(error);
  }
};

// Get single course
exports.getCourse = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id).populate('createdBy', 'name email');

    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found'
      });
    }

    res.status(200).json({
      success: true,
      data: course
    });
  } catch (error) {
    next(error);
  }
};

// Create course (admin only)
exports.createCourse = async (req, res, next) => {
  try {
    const { errors, isValid } = validateCourseInput(req.body);

    // Check validation
    if (!isValid) {
      return res.status(400).json({
        success: false,
        errors
      });
    }

    // Add user to req.body
    req.body.createdBy = req.user.id;

    const course = await Course.create(req.body);

    res.status(201).json({
      success: true,
      data: course
    });
  } catch (error) {
    next(error);
  }
};

// Delete course (admin only)
exports.deleteCourse = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found'
      });
    }

    // Make sure user is course owner or admin
    if (course.createdBy.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to delete this course'
      });
    }

    await Course.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Course deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};