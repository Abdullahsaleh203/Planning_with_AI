// Mock dependencies
jest.mock('../../models/User');
jest.mock('jsonwebtoken');

const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const { registerUser, loginUser } = require('./authController');

describe('Auth Controller', () => {
    let req, res;

    beforeEach(() => {
        req = {
            body: {}
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
    });

    describe('registerUser', () => {
        it('should register a new user successfully', async () => {
            // Mock user data
            const mockUser = {
                _id: 'user123',
                username: 'testuser',
                email: 'test@example.com',
                password: 'hashedpassword'
            };

            // Mock User.findOne to return null (no existing user)
            User.findOne.mockResolvedValue(null);

            // Mock User.create to return the new user
            User.create.mockResolvedValue(mockUser);

            // Mock jwt.sign to return a token
            jwt.sign.mockReturnValue('jwt_token');

            // Set request body
            req.body = {
                username: 'testuser',
                email: 'test@example.com',
                password: 'password123'
            };

            // Call the function
            await registerUser(req, res);

            // Assertions
            expect(User.findOne).toHaveBeenCalledWith({
                $or: [{ email: 'test@example.com' }, { username: 'testuser' }]
            });
            expect(User.create).toHaveBeenCalledWith({
                username: 'testuser',
                email: 'test@example.com',
                password: 'password123'
            });
            expect(jwt.sign).toHaveBeenCalledWith(
                { userId: 'user123' },
                expect.any(String),
                { expiresIn: '7d' }
            );
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({
                _id: 'user123',
                username: 'testuser',
                email: 'test@example.com',
                token: 'jwt_token'
            });
        });

        it('should return error if user already exists', async () => {
            // Mock User.findOne to return an existing user
            User.findOne.mockResolvedValue({ email: 'test@example.com' });

            req.body = {
                username: 'testuser',
                email: 'test@example.com',
                password: 'password123'
            };

            await registerUser(req, res);

            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({
                message: 'User with this email or username already exists'
            });
        });
    });

    describe('loginUser', () => {
        it('should login user successfully', async () => {
            // Mock user data with comparePassword method
            const mockUser = {
                _id: 'user123',
                username: 'testuser',
                email: 'test@example.com',
                comparePassword: jest.fn().mockResolvedValue(true)
            };

            // Mock User.findOne to return the user
            User.findOne.mockResolvedValue(mockUser);

            // Mock jwt.sign to return a token
            jwt.sign.mockReturnValue('jwt_token');

            req.body = {
                email: 'test@example.com',
                password: 'password123'
            };

            await loginUser(req, res);

            expect(User.findOne).toHaveBeenCalledWith({ email: 'test@example.com' });
            expect(mockUser.comparePassword).toHaveBeenCalledWith('password123');
            expect(jwt.sign).toHaveBeenCalledWith(
                { userId: 'user123' },
                expect.any(String),
                { expiresIn: '7d' }
            );
            expect(res.json).toHaveBeenCalledWith({
                _id: 'user123',
                username: 'testuser',
                email: 'test@example.com',
                token: 'jwt_token'
            });
        });

        it('should return error for invalid credentials', async () => {
            // Mock User.findOne to return null (user not found)
            User.findOne.mockResolvedValue(null);

            req.body = {
                email: 'test@example.com',
                password: 'wrongpassword'
            };

            await loginUser(req, res);

            expect(res.status).toHaveBeenCalledWith(401);
            expect(res.json).toHaveBeenCalledWith({
                message: 'Invalid email or password'
            });
        });
    });
});
