PERSONAL PROFILE API & PROJECT SEARCH – ASSIGNMENT DOCUMENTATION

PROJECT OVERVIEW
This project is a personal profile and project search application developed to demonstrate full-stack development skills. The application focuses on retrieving personal profile information and searching projects based on skills using REST APIs. A frontend interface is provided to interact with the backend services.

The assignment emphasizes backend API design, database schema creation, query-based search, and frontend-backend integration.

TECH STACK USED

Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

Frontend
- React
- Tailwind CSS
- Axios

FEATURES IMPLEMENTED

- Retrieve personal profile information
- Search projects using skill-based query parameters
- Case-insensitive project search
- REST-compliant API responses
- Dark-themed, user-friendly frontend UI

DATABASE DESIGN

A single MongoDB collection is used to store the user profile.

Profile structure includes:
- Name
- Email
- Skills (array of strings)
- Education details
- Projects with title, description, skills, and link
- Social links (GitHub, LinkedIn, Portfolio)

Indexes are applied on project skills to support efficient search queries.

API ENDPOINTS

Health Check
GET /check

Get Profile
GET /api/v1/getProfile?email=user@email.com

Search Projects by Skill
GET /api/v1/projects?skill=React

PROJECT SEARCH LOGIC

The backend searches projects using MongoDB dot notation on nested project skills.
Matching projects are filtered and returned as an array.
If no projects are found, an empty array is returned instead of an error.

FRONTEND DESCRIPTION

The frontend is built using React and Tailwind CSS with a dark theme.
It provides an introduction section, skill display, a search bar, and dynamic project cards.

Each project card displays:
- Project title
- Short description
- Skill tags
- Live or GitHub link

SETUP INSTRUCTIONS

Backend Setup
- Install dependencies using npm
- Configure environment variables for MongoDB and CORS
- Run the backend server

Frontend Setup
- Install dependencies
- Run the development server
- Ensure backend is running before searching projects

TESTING

- APIs were tested using Postman
- Frontend interactions were tested using the browser
- CORS was configured to allow frontend-backend communication

LIMITATIONS

- Single-user profile system
- No pagination for projects
- Profile creation and updates are handled outside the frontend scope

PORTFOLIO & GITHUB

Portfolio: https://ankitdhakad4.github.io/ankit-portfolio/
GitHub: https://github.com/AnkitDhakad4

LEARNING OUTCOMES

This assignment improved understanding of REST API design, MongoDB schema modeling, skill-based search queries, frontend-backend integration, and clean UI development using modern web technologies.

FINAL NOTE

This project demonstrates the ability to build full-stack applications focused on data retrieval, efficient querying, and user-friendly interfaces.
