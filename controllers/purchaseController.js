const Purchase = require('../models/Purchase');
const Course = require('../models/Course');

// Purchase a course
exports.createPurchase = async (req, res, next) => {
  try {
    const { courseId } = req.body;

    // Check if course exists
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found'
      });
    }

    // Check if user already purchased this course
    const existingPurchase = await Purchase.findOne({
      userId: req.user.id,
      courseId
    });

    if (existingPurchase) {
      return res.status(400).json({
        success: false,
        message: 'You have already purchased this course'
      });
    }

    // Create purchase
    const purchase = await Purchase.create({
      userId: req.user.id,
      courseId,
      amount: course.price
    });

    // Populate course details
    await purchase.populate('courseId');

    res.status(201).json({
      success: true,
      data: purchase
    });
  } catch (error) {
    next(error);
  }
};

// Get user's purchased courses
exports.getUserPurchases = async (req, res, next) => {
  try {
    const purchases = await Purchase.find({ userId: req.user.id })
      .populate('courseId')
      .sort({ date: -1 });

    res.status(200).json({
      success: true,
      count: purchases.length,
      data: purchases
    });
  } catch (error) {
    next(error);
  }
};  