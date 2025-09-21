# Planning_with_AI - Task Management Application


## Project Overview

A web-based task management application that allows users to create, organize, and track their tasks efficiently, with comprehensive AI integration throughout the development lifecycle.

## Tech Stack

- **Frontend**: React with Vite
- **Backend**: Node.js with Express
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT
- **Testing**: Jest and React Testing Library
- **AI Integration**: Qwen for code generation, testing, and API-aware functions

## Features

- User authentication (signup/login)
- Create, read, update, and delete tasks
- Task categorization, due dates, and priority levels
- Progress tracking and status management
- Responsive UI for all devices
- AI-assisted development workflow

## Project Structure

```
.
├── backend/
│   ├── controllers/     # Request handlers
│   ├── middleware/      # Custom middleware functions
│   ├── models/          # Database models
│   ├── routes/          # API route definitions
│   └── server.js        # Main server file
├── frontend/
│   ├── public/          # Static assets
│   └── src/             # React application
│       ├── components/  # Reusable UI components
│       ├── pages/       # Page components
│       ├── services/    # API service functions
│       ├── utils/       # Utility functions
│       ├── App.jsx      # Main application component
│       └── main.jsx     # Entry point
├── .env                 # Environment variables
├── package.json         # Project dependencies and scripts
└── README.md            # This file
```

## AI Integration Plan

### 🧱 Code or Feature Generation

Using AI to scaffold:

- React components for task UI
- Express routes for CRUD operations
- Mongoose models for data structure
- Authentication middleware

### 🧪 Testing Support

AI-assisted generation of:

- Unit tests for API endpoints
- Integration tests for database operations
- Frontend component tests
- Edge case scenario testing

### 📡 Schema-Aware Generation

Leveraging REST API specifications to:

- Generate API client functions
- Create validation schemas
- Build OpenAPI documentation
- Auto-generate CRUD operations

### In-Editor Tooling

- **Tool**: Qoder IDE with AI capabilities
- **Support**:
  - Intelligent code completion
  - Automated code review
  - Commit message generation
  - PR summary creation

## Sample AI Prompts

1. "Generate a React component for a task creation form with fields for title, description, due date, and category, using TypeScript interfaces"
2. "Create unit tests for the task creation API endpoint that validate input fields, check database insertion, and verify response formats"

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Git

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install backend dependencies:

```bash
npm install
```

3. Install frontend dependencies:

```bash
cd frontend && npm install
```

4. Create a `.env` file in the root directory:

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_jwt_secret_key
```

### Running the Application

Start the development server:

```bash
npm run dev
```

This will run both the backend and frontend in development mode.

Access the application:

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## Development Workflow

### AI-Assisted Development

1. Use Qoder IDE's AI features for code generation
2. Leverage AI for testing and documentation
3. Utilize schema-aware generation for API functions
4. Implement automated code review processes

### Additional Documentation

- [AI Integration Plan](AI_INTEGRATION_PLAN.md) - Detailed AI integration strategy
- [Development Guide](DEVELOPMENT_GUIDE.md) - Comprehensive development workflow

## Contributing

1. Fork the repository
2. Create a feature branch
3. Implement changes with AI assistance
4. Write tests for new functionality
5. Update documentation
6. Submit a pull request

## License

This project is licensed under the MIT License.
