const express = require('express');
const router = express.Router();
const { readCourses, writeCourses, getNextId } = require('../fileUtils');

// GET all courses
router.get('/', (req, res) => {
  const data = readCourses();
  res.json({
    success: true,
    count: data.courses.length,
    data: data.courses
  });
});

// GET a single course by ID
router.get('/:id', (req, res) => {
  const data = readCourses();
  const course = data.courses.find(c => c.id === parseInt(req.params.id));

  if (!course) {
    return res.status(404).json({
      success: false