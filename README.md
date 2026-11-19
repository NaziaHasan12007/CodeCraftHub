# The CodeCraftHub learning management system (LMS)
A simple REST API to track your personal learning goals and courses.

Overview
CodeCraftHub helps developers keep track of courses they want to learn. Built with Node.js and Express, the platform provides a straightforward REST API for managing your learner's journey.

Features
Full CRUD operations for course management
JSON file-based storage (no database needed)
RESTful API design
Proper error handling
Installation
Clone or download the project
Install Node.js dependencies:
bash

npm install
Run
Running the application
Start the Express server:

bash

npm start
Run
The API and learning dashboard will be available at http://localhost:5000 by default. Open that address to use the dashboard. To use a different port, set `PORT` when starting the server, for example:

```bash
PORT=5001 npm start
```

API Endpoints
1. Add a Course
POST /api/courses

Request body:

json

{
  "name": "Python Basics",
  "description": "Learn Python fundamentals",
  "target_date": "2025-12-31",
  "status": "Not Started"
}
2. Get all courses
GET /api/courses

3. Get a specific course
GET /api/courses/<id>

4. Update a course
PUT /api/courses/<id>

Request body (all fields optional):

json

{
  "status": "In Progress"
}
5. Delete a course
DELETE /api/courses/<id>

Testing
Use the provided curl commands or import the Postman collection to test all endpoints.

Troubleshooting
Problem: "Cannot find module 'express'"
Solution: Run npm install

Problem: "Port already in use"
Solution: Stop the service using port 5000, then retry. To run on another port, use `PORT=5001 npm start`.

Project structure
plaintext

codecrafthub/
├── server.js        # Main Express application
├── data/            # Course data
├── routes/          # API routes
└── package.json     # Dependencies
