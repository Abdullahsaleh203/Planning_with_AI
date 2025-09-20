# AI Prompting Strategies for Development

This document provides guidance on effective prompting techniques for various development scenarios when using AI tools like Qwen in Qoder IDE.

## General Prompting Principles

### 1. Be Specific and Contextual

Provide clear context about what you're building, the technology stack, and specific requirements.

**Good**: "Generate a React component for a task creation form using TypeScript and Tailwind CSS with fields for title, description, due date, and priority. Include form validation and error handling."

**Better**: "Generate a React functional component named TaskForm using TypeScript and Tailwind CSS for a task management app. The form should include:

- Title field (required, 1-100 characters)
- Description field (optional, max 500 characters)
- Due date picker (optional)
- Priority selector (low, medium, high)
- Form validation with error messages
- onSubmit handler that accepts a Task object
- onCancel handler for form reset
  Use React hooks for state management and follow accessibility best practices."

### 2. Define Clear Output Requirements

Specify the exact format, structure, and style you want.

**Example**: "Generate the code using ES6 modules, with JSDoc comments for all functions, and follow the Airbnb JavaScript style guide."

### 3. Include Constraints and Edge Cases

Mention any limitations, browser compatibility requirements, or special considerations.

**Example**: "Support IE11+, include error boundaries, and handle cases where the API might be unavailable."

## Frontend Development Prompts

### React Component Generation

```
Generate a [component name] React component using [framework] with the following specifications:
- Props interface with detailed typing
- State management using [hooks/preferred state management]
- Form handling if applicable with validation
- Responsive design using [CSS framework/styling approach]
- Accessibility features (ARIA labels, keyboard navigation)
- Error handling and loading states
- Unit test examples using [testing library]

Example:
"Generate a TaskList React component using TypeScript and Tailwind CSS that displays an array of Task objects. Include filtering by status (todo, in-progress, completed), sorting by due date, and a loading skeleton. Each task should display title, description, due date, and priority. Include edit and delete buttons for each task. Use React hooks for state management and follow accessibility best practices."
```

### State Management

```
Create a [state management approach] implementation for managing [data type] with the following actions:
- [action 1]
- [action 2]
- [action 3]

Include proper typing, error handling, and documentation.

Example:
"Create a Redux Toolkit slice for managing user tasks with actions for adding, updating, deleting, and fetching tasks. Include proper TypeScript interfaces for Task objects, async thunks for API calls with loading and error states, and documentation for each action."
```

### UI/UX Implementation

```
Design and implement [UI component/feature] with the following requirements:
- [Requirement 1]
- [Requirement 2]
- [Requirement 3]
- Follow [design system/accessibility guidelines]

Example:
"Design and implement a responsive navigation bar for a task management app with mobile hamburger menu. Include links for Dashboard, Tasks, Categories, and Profile. Add user avatar and logout functionality. Follow WCAG 2.1 accessibility guidelines and use Tailwind CSS for styling."
```

## Backend Development Prompts

### API Endpoint Creation

```
Create an Express route for [endpoint purpose] with the following specifications:
- HTTP method: [GET/POST/PUT/DELETE]
- Path: [route path]
- Request validation using [validation library]
- Authentication middleware if needed
- Database operations using [ORM/ODM]
- Proper error handling and HTTP status codes
- Response format specification
- Unit test examples

Example:
"Create an Express route for updating a task with the following specifications:
- HTTP method: PUT
- Path: /api/tasks/:id
- Request validation using Joi to ensure title, description, and dueDate are properly formatted
- Authentication middleware to ensure user owns the task
- Database operations using Mongoose to find and update the task
- Proper error handling for task not found (404) and validation errors (400)
- Response format: JSON object with updated task data
- Unit test examples using Jest"
```

### Database Model Design

```
Design a [database system] model for [entity] with the following requirements:
- Fields: [list fields with types and constraints]
- Relationships: [describe relationships with other models]
- Indexes for performance
- Validation rules
- Instance/document methods if needed

Example:
"Design a MongoDB model for a Task entity with the following requirements:
- Fields:
  * title (String, required, 1-100 characters)
  * description (String, optional, max 500 characters)
  * dueDate (Date, optional)
  * priority (String, enum: low/medium/high, default: medium)
  * status (String, enum: todo/in-progress/completed, default: todo)
  * createdBy (ObjectId, reference to User, required)
  * createdAt (Date, default: now)
  * updatedAt (Date, default: now)
- Indexes on createdBy and dueDate for performance
- Validation to ensure dueDate is not in the past
- Instance method to check if task is overdue"
```

### Middleware Development

```
Create Express middleware for [purpose] with the following specifications:
- Function signature and parameters
- Logic implementation
- Error handling
- Usage example

Example:
"Create Express middleware for rate limiting API requests to 100 requests per 15 minutes per IP address with the following specifications:
- Use memory store for tracking requests
- Return 429 status code when limit is exceeded
- Include retry-after header in response
- Skip for authenticated admin users
- Error handling for store failures
- Usage example for applying to specific routes"
```

## Testing Prompts

### Unit Test Generation

```
Generate comprehensive unit tests for [function/component/module] with the following requirements:
- Testing framework: [Jest/Vitest/Jasmine/etc.]
- Test [specific scenarios/edge cases]
- Mock [dependencies/external services]
- Assert [expected outcomes]
- Follow [testing best practices]

Example:
"Generate comprehensive unit tests for a TaskService class with the following requirements:
- Testing framework: Jest
- Test successful task creation, retrieval, update, and deletion
- Test error cases like invalid input, database errors, and not found scenarios
- Mock Mongoose model methods
- Assert correct data transformations and error handling
- Follow AAA pattern (Arrange, Act, Assert) and use descriptive test names"
```

### Integration Test Creation

```
Create integration tests for [API endpoint/system component] with the following specifications:
- Test environment setup
- Test data preparation
- Request simulation
- Response validation
- Cleanup procedures

Example:
"Create integration tests for the user authentication API with the following specifications:
- Test environment with in-memory MongoDB using mongodb-memory-server
- Test data preparation with factory functions for users
- Request simulation for registration, login, and token refresh
- Response validation for success cases and error scenarios
- Cleanup procedures to remove test data after each test"
```

### End-to-End Test Design

```
Design end-to-end tests for [user flow/feature] using [testing framework] with the following requirements:
- Test setup and teardown
- User journey simulation
- Assertion points
- Error handling

Example:
"Design end-to-end tests for the task creation flow using Cypress with the following requirements:
- Test setup with database seeding for a test user
- User journey simulation from login to task creation form completion
- Assertion points for form validation, API calls, and UI updates
- Error handling for network failures and server errors"
```

## Documentation Prompts

### Code Documentation

```
Create comprehensive documentation for [code module/component] including:
- Overview and purpose
- Installation/usage instructions
- API reference with parameters and return values
- Examples
- Error handling information

Example:
"Create comprehensive documentation for a TaskService class including:
- Overview and purpose: Service for managing task operations
- Installation/usage instructions: Import and instantiate with database connection
- API reference with parameters and return values for all public methods
- Examples for common use cases like creating, updating, and filtering tasks
- Error handling information for database errors and validation failures"
```

### Technical Specification

```
Write a technical specification for [feature/system] with the following sections:
- Overview and objectives
- Technical requirements
- Architecture design
- API specifications
- Database schema
- Security considerations
- Performance requirements
- Testing strategy

Example:
"Write a technical specification for a real-time task collaboration feature with the following sections:
- Overview and objectives: Enable multiple users to collaborate on tasks in real-time
- Technical requirements: WebSocket support, conflict resolution, presence indicators
- Architecture design: Client-server model with WebSocket connections
- API specifications: WebSocket events and REST endpoints
- Database schema: Task revisions and user presence tracking
- Security considerations: Authentication for WebSocket connections, data encryption
- Performance requirements: Handle 1000 concurrent users per instance
- Testing strategy: Load testing and conflict scenario validation"
```

## Code Review Prompts

### Quality Assurance

```
Review the following code for [specific aspect] and provide feedback:
- Code snippet
- Areas of concern
- Suggestions for improvement
- Best practices alignment

Example:
"Review the following React component for performance optimization and provide feedback:
- Code snippet: [TaskList component code]
- Areas of concern: Re-renders, unnecessary computations, large list handling
- Suggestions for improvement: Memoization, virtualization, useCallback optimization
- Best practices alignment: React performance patterns, hook usage"
```

### Security Analysis

```
Analyze the following code for security vulnerabilities:
- Code snippet
- Potential vulnerabilities identified
- Risk assessment
- Mitigation recommendations

Example:
"Analyze the following authentication middleware for security vulnerabilities:
- Code snippet: [JWT verification middleware]
- Potential vulnerabilities identified: Token expiration, algorithm confusion, weak secret storage
- Risk assessment: High impact if exploited, medium likelihood
- Mitigation recommendations: Implement refresh tokens, use RS256 algorithm, store secrets in environment variables"
```

## Best Practices for Effective AI Prompting

### 1. Iterative Refinement

Start with a basic prompt and refine based on the output:

- If the output is too general, add more specific requirements
- If the output is too complex, simplify the requirements
- If the output is missing something, explicitly request it

### 2. Contextual Information

Always provide relevant context:

- Technology stack being used
- Existing code patterns in the project
- Style guides or coding standards
- Target browser/environment support

### 3. Clear Examples

When possible, provide examples of what you want:

- Reference existing code in your project
- Show preferred patterns or structures
- Include links to documentation or style guides

### 4. Error Handling

Explicitly request error handling when needed:

- Input validation
- Exception handling
- Graceful degradation
- User-friendly error messages

### 5. Testing Considerations

Request test-related information:

- Unit test examples
- Edge case considerations
- Mocking requirements
- Test data examples

## Common Prompt Templates

### Feature Implementation

```
Implement [feature] in [technology stack] with the following requirements:
1. [Requirement 1]
2. [Requirement 2]
3. [Requirement 3]
...
N. [Requirement N]

Include:
- Proper error handling
- Input validation
- Documentation/comments
- Example usage
```

### Bug Fixing

```
Identify and fix issues in the following [language] code:
[Code snippet]

Issues to address:
1. [Issue 1]
2. [Issue 2]
...

Requirements:
- Maintain existing functionality
- Improve [specific aspect]
- Follow [coding standards]
```

### Refactoring

```
Refactor the following [language] code to improve [specific aspect]:
[Code snippet]

Goals:
- Improve [readability/maintainability/performance]
- Apply [design pattern/best practice]
- Maintain existing functionality
- Follow [coding standards]
```

### Optimization

```
Optimize the following [language] code for [specific metric]:
[Code snippet]

Focus areas:
- [Performance/Readability/Maintainability]
- [Memory usage/Execution speed/Code size]
- [Specific bottlenecks if known]
```

By following these prompting strategies, developers can effectively leverage AI tools to accelerate development while maintaining high code quality and consistency.
