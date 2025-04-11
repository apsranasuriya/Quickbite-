const request = require('supertest');
const userApp = require('../user-service/server.js');  // Adjust path to the user service
const orderApp = require('../order-service/server.js');  // Adjust path to the order service

describe('End-to-End Test: piyumi logs in and places an order', () => {
  let userId;

  // Step 1: Log in with valid credentials
  it('should allow piyumi to login and return a user ID', async () => {
    const loginResponse = await request(userApp)
      .post('/login')
      .send({
        username: 'Piyumi',
        password: 'password123',
      });

    expect(loginResponse.status).toBe(200);
    expect(loginResponse.body).toHaveProperty('userId');
    userId = loginResponse.body.userId;
  });

  // Step 2: Place an order after logging in
  it('should allow the logged-in user to place an order', async () => {
    const orderResponse = await request(orderApp)
      .post('/order')
      .send({
        userId: userId,  // Include the user ID from login
        name: 'Piyumi',
        email: 'piyumi@example.com',
        phone: '1234567890',
        address: '123 Main St',
        items: ['Pizza', 'Pasta'],
        payment: 'Credit Card',
        delivery_time: '12:30 PM',
        special_instructions: 'No onions on pizza',
      });

    expect(orderResponse.status).toBe(201);
    expect(orderResponse.body).toHaveProperty('id');
    expect(orderResponse.body.name).toBe('Piyumi');
    expect(orderResponse.body.items).toEqual(['Pizza', 'Pasta']);
  });
});
