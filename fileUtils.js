const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'data', 'courses.json');

// Read all courses from JSON file
const readCourses = () => {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading file:', error);
    return { courses: [] };
  }
};

// Write courses to JSON file
const writeCourses = (data) => {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error('Error writing file:', error);
    return false;
  }
};

// Get next available ID
const getNextId = (courses) => {
  if (courses.length === 0) return 1;
  return Math.max(...courses.map(c => c.id)) + 1;
};

module.exports = {
  readCourses,
  writeCourses,
  getNextId
};