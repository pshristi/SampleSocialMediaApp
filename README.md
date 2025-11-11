# Sample Social Media App

A sample social media web application built with Node.js, Express, and Sequelize ORM. This project demonstrates CRUD operations, RESTful API design, and database relationships

## 📚 About This Project

This project was developed as part of the learning exercises in the **Full Stack Web Development with NodeJS Master Course** by Coding Blocks. The course covers comprehensive full-stack development with JavaScript, including MySQL, MongoDB, and modern web development practices.

## ✨ Features

- **User Management**: Create and manage user profiles
- **Posts**: Users can create, read, and manage posts
- **Comments**: Interactive commenting system on posts
- **RESTful API**: Well-structured API endpoints for all operations
- **Database Relationships**: Implements one-to-many relationships between Users, Posts, and Comments
- **Responsive Frontend**: Bootstrap-based UI with jQuery for dynamic interactions
- **Testing Suite**: Comprehensive tests using Mocha and Chai

## 🛠️ Technology Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **Sequelize** - ORM for database operations
- **MySQL2** - Production database
- **SQLite3** - Testing database

### Frontend
- **HTML5/CSS3** - Structure and styling
- **Bootstrap** - Responsive UI framework
- **jQuery** - DOM manipulation and AJAX requests
- **Custom JavaScript** - Application logic

### Testing
- **Mocha** - Test framework
- **Chai** - Assertion library
- **NYC** - Code coverage tool

## 📦 Installation

### Prerequisites
- Node.js (v12 or higher)
- MySQL (for production)
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd SampleSocialMediaApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up MySQL database**
   ```sql
   CREATE DATABASE cbsocialmediadb;
   CREATE USER 'cbsocialuser'@'localhost' IDENTIFIED BY 'cbsocialpass';
   GRANT ALL PRIVILEGES ON cbsocialmediadb.* TO 'cbsocialuser'@'localhost';
   FLUSH PRIVILEGES;
   ```

4. **Start the server**
   ```bash
   npm start
   ```

5. **Access the application**
   
   Open your browser and navigate to `http://localhost:8383`

## 🚀 Usage

### Running the Application

```bash
# Start the server
npm start

# Run tests
npm test

# Generate code coverage report
npm run cover
```

### API Endpoints

#### Users
- `GET /api/users/` - Get all users
- `POST /api/users/` - Create a new user

#### Posts
- `GET /api/posts/` - Get all posts
- `GET /api/posts/?userId=<id>` - Get posts by specific user
- `POST /api/posts/` - Create a new post

#### Comments
- `GET /api/posts/:postId/comments` - Get all comments for a post
- `POST /api/posts/:postId/comments` - Add a comment to a post

### Frontend Pages

- **Home** - View all posts from all users
- **My Posts** - View and manage your own posts
- **Write Post** - Create new posts

## 📁 Project Structure

```
SampleSocialMediaApp/
├── src/
│   ├── connectors/          # Database query functions
│   │   ├── comments.js
│   │   ├── posts.js
│   │   └── users.js
│   ├── db/
│   │   └── models.js        # Sequelize models and relationships
│   ├── public/              # Frontend static files
│   │   ├── app/             # JavaScript application logic
│   │   ├── components/      # HTML components
│   │   ├── css/             # Stylesheets
│   │   ├── fonts/           # Custom fonts
│   │   ├── js/              # Third-party libraries
│   │   └── index.html       # Main HTML file
│   ├── routes/              # Express route handlers
│   │   ├── posts/
│   │   └── users/
│   ├── utils/               # Utility functions
│   └── server.js            # Express server configuration
├── test/                    # Test files
│   ├── connectors/
│   └── setup.js
├── package.json
└── README.md
```

## 🗄️ Database Schema

### Users
- `id` (Primary Key, Auto Increment)
- `username` (String, Unique, Not Null)

### Posts
- `id` (Primary Key, Auto Increment)
- `title` (String, max 140 characters)
- `body` (Text, Not Null)
- `userId` (Foreign Key)

### Comments
- `id` (Primary Key, Auto Increment)
- `title` (String, max 140 characters)
- `body` (Text)
- `userId` (Foreign Key)
- `postId` (Foreign Key)

## 🧪 Testing

The project includes a testing suite with Mocha and Chai. Tests use an in-memory SQLite database to ensure isolation and speed.

```bash
# Run all tests
npm test

# Run tests with coverage report
npm run cover
```

## 📝 Key Learning Outcomes

Through this project, you'll learn:
- Building RESTful APIs with Express.js
- Database modeling and relationships with Sequelize
- Frontend-backend integration
- Asynchronous JavaScript and Promises
- Testing Node.js applications
- Full-stack application deployment

## 🤝 Contributing

This is a learning project, but suggestions and improvements are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 👤 Maintainer
**Shristi Pathak**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue)](https://linkedin.com/in/shristi-pathak)

## 🙏 Acknowledgments

- **Coding Blocks** - For the comprehensive Web Development course
- **Arnav Gupta** ([@ChampionSwimmer](https://github.com/ChampionSwimmer)) - Course instructor and mentor
- The open-source community for the amazing tools and libraries used in this project

## 📚 Course Reference

This project is part of the **Full Stack Web Development with NodeJS Master Course** offered by Coding Blocks. The course covers:
- HTML, CSS, and JavaScript fundamentals
- Node.js and Express.js
- Database management (MySQL, MongoDB)
- WebSockets and real-time communication
- Deployment and security best practices

**Course Link:** [Web Development Online Course](https://online.codingblocks.com/courses/web-development-online-course)

---

⭐ If you found this project helpful, please consider giving it a star!

