const request = require('supertest');
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Task Tracker API' });
});

describe('Backend API Tests', () => {
  it('should respond with a 200 status for GET /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Welcome to the Task Tracker API' });
  });

  // Add more tests as needed for your endpoints
});
