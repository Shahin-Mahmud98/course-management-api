const validator = require('validator');

exports.validateRegisterInput = (data) => {
  const errors = {};

  // Name validation
  if (!data.name || validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  } else if (!validator.isLength(data.name, { min: 2, max: 50 })) {
    errors.name = 'Name must be between 2 and 50 characters';
  }

  // Email validation
  if (!data.email || validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  } else if (!validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  // Password validation
  if (!data.password || validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  } else if (!validator.isLength(data.password, { min: 6 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};

exports.validateLoginInput = (data) => {
  const errors = {};

  // Email validation
  if (!data.email || validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  } else if (!validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  // Password validation
  if (!data.password || validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};

exports.validateCourseInput = (data) => {
  const errors = {};

  // Title validation
  if (!data.title || validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  } else if (!validator.isLength(data.title, { max: 100 })) {
    errors.title = 'Title cannot be more than 100 characters';
  }

  // Description validation
  if (!data.description || validator.isEmpty(data.description)) {
    errors.description = 'Description field is required';
  } else if (!validator.isLength(data.description, { max: 1000 })) {
    errors.description = 'Description cannot be more than 1000 characters';
  }

  // Price validation
  if (!data.price && data.price !== 0) {
    errors.price = 'Price field is required';
  } else if (!validator.isNumeric(String(data.price)) || data.price < 0) {
    errors.price = 'Price must be a non-negative number';
  }

  // Instructor validation
  if (!data.instructor || validator.isEmpty(data.instructor)) {
    errors.instructor = 'Instructor field is required';
  } else if (!validator.isLength(data.instructor, { max: 50 })) {
    errors.instructor = 'Instructor name cannot be more than 50 characters';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};