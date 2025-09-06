# 🌐 Frontend Task 

A modern, responsive portfolio website featuring a homepage, projects section, contact form, and creative UI elements. This project can be used as a personal portfolio or customized for a client.

---

## 🚀 Features

- ✅ Modern homepage layout with header, footer, and responsive navigation
- 🧑 Hero section with name/title introduction
- 📂 Projects section displaying project cards with title, description, image, and link
- 📨 Contact form with real-time validation (no backend)
- 🌗 Dark/Light mode toggle
- 📱 Fully responsive design (desktop & mobile)

---
## 🔧 Tech Stack

- HTML5
- CSS3 
- JavaScript (Vanilla JS and framework ReactJS)
- JSON for project data (or public API)
****

✉️ Contact Form

Fields: Name, Email, Message
All fields are required
Email field is validated using regex
Shows a success message on submit (client-side only)

---

## How to run 
1. npm install
2. npm run dev


🔐 Authentication & Role-Based Access Control API (Backend Task)

This project is a JWT-based authentication and authorization system built with Node.js, Express, and MongoDB/MySQL.
It provides secure user registration, login, logout, role-based access, and protected routes.


---

🚀 Features

1. User Authentication

Register, Login, and Logout endpoints.

Passwords hashed with bcrypt before saving.

JWT used for secure session handling.



2. Role-Based Access

Roles: user (default) and admin.

Admin Routes:

View all users.

Delete any user.


User Routes:

View/update only their own profile.




3. Protected Routes

Middleware to verify JWT tokens.

Restricts access based on login status and role.

Examples:

GET /profile → Logged-in users only.

DELETE /users/:id → Admin only.




4. Error Handling

Invalid credentials.

Unauthorized access.

Expired or invalid tokens.

Standardized error responses.





---

🛠️ Tech Stack

Backend: Node.js, Express.js

Database: MongoDB / MySQL

Authentication: JWT (JSON Web Tokens)

Password Security: bcrypt



---

📂 Project Structure

├── config/
│   └── dbConnect.js          # Database connection (MongoDB/MySQL)
├── middleware/
│   └── authMiddleware.js        # JWT verification & role check
├── models/
│   └── User.js        # User schema/model
├── routes/
│   ├── userRoute.js        # Register, Login, Logout
│           
├── controllers/
│   └── authController.js
│   └── userController.js
├── server.js          # Entry point
└── README.md


---

🔑 API Endpoints

Auth Routes

Method	Endpoint	Description	Access

POST	/auth/register	Register new user	Public
POST	/auth/login	Login & get JWT token	Public
POST	/auth/logout	Logout user (invalidate)	User


User Routes

Method	Endpoint	Description	Access

GET	/profile	Get logged-in user data	User
GET	/users	Get all users	Admin
DELETE	/users/:id	Delete user by ID	Admin



---

⚙️ Setup & Installation

1. Clone the repo:

git clone https://github.com/your-repo/auth-rbac-api.git
cd auth-rbac-api


2. Install dependencies:

npm install


3. Configure environment variables (.env):

PORT=3000
MONGO_URI=mongodb://localhost:27017/authdb
JWT_SECRET=your_jwt_secret_key


4. Run the server:

npm start




---

🔒 Security Considerations

Passwords are hashed with bcrypt before storing.

JWT tokens are signed with a secret key.

Sensitive routes are protected with role-based middleware.
