const request = require('supertest');
const express = require('express');
const app = require('./server');  // Import the server file, assuming it's named 'server.js'

describe('User Service', () => {
  describe('GET /users', () => {
    it('should return a list of users', async () => {
      const response = await request(app).get('/users');
      
      expect(response.status).toBe(200);
      expect(response.body).toEqual([
        { id: 1, username: 'Piyumi', password: 'password123' }
      ]);
    });
  });

  describe('POST /login', () => {
    it('should return 200 for valid credentials', async () => {
      const response = await request(app).post('/login')
        .send({ username: 'Piyumi', password: 'password123' });

      expect(response.status).toBe(200);
      expect(response.body.message).toBe('Login successful!');
    });

    it('should return 401 for invalid credentials', async () => {
      const response = await request(app).post('/login')
        .send({ username: 'Piyumi', password: 'wrongpassword' });

      expect(response.status).toBe(401);
      expect(response.body.message).toBe('Invalid credentials!');
    });
  });
});
