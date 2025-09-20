import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState(null);

  // Check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // In a real app, you would verify the token with your backend
      // For now, we'll just set a mock user
      setUser({ id: 1, username: 'demo_user' });
    }
  }, []);

  // Mock data for demonstration
  useEffect(() => {
    if (user) {
      setTasks([
        { id: 1, title: 'Create project plan', description: 'Outline the features and timeline', dueDate: '2025-09-25', priority: 'high', status: 'in-progress' },
        { id: 2, title: 'Set up development environment', description: 'Install all necessary tools and dependencies', dueDate: '2025-09-20', priority: 'medium', status: 'completed' },
        { id: 3, title: 'Design UI mockups', description: 'Create wireframes for the main screens', dueDate: '2025-09-30', priority: 'medium', status: 'todo' }
      ]);
    }
  }, [user]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Task Management App</h1>
        {user ? (
          <div>
            <p>Welcome, {user.username}!</p>
            <button onClick={() => {
              localStorage.removeItem('token');
              setUser(null);
            }}>Logout</button>
          </div>
        ) : (
          <div>
            <button onClick={() => setUser({ id: 1, username: 'demo_user' })}>
              Login
            </button>
          </div>
        )}
      </header>

      <main>
        {user ? (
          <div>
            <h2>Your Tasks</h2>
            <div className="task-list">
              {tasks.map(task => (
                <div key={task.id} className={`task-card priority-${task.priority} status-${task.status}`}>
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                  <div className="task-details">
                    <span>Due: {task.dueDate}</span>
                    <span className="priority">Priority: {task.priority}</span>
                    <span className="status">Status: {task.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="login-prompt">
            <h2>Please login to manage your tasks</h2>
            <p>This is a demo application showcasing a task management system with AI integration.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
