const request = require('supertest');

// Adjust these paths as per your folder structure
const userServiceApp = require('./server.js'); // user-service/server.js
const orderServiceApp = require('../order-service/server.js'); // path from user-service to order-service


describe('Integration Tests - User and Order Services', () => {
  let userServer;
  let orderServer;

  beforeAll(() => {
    // Start the servers for testing
    userServer = userServiceApp.listen(5001);  // Ensure the port matches your user-service
    orderServer = orderServiceApp.listen(5002);  // Ensure the port matches your order-service
  });

  afterAll(() => {
    // Close the servers after the tests
    userServer.close();
    orderServer.close();
  });

  it('should allow a user to log in and place an order', async () => {
    // Step 1: Log in to the user service
    const loginResponse = await request(userServiceApp)
      .post('/login')
      .send({ username: 'Piyumi', password: 'password123' });

    expect(loginResponse.status).toBe(200);
    expect(loginResponse.body.message).toBe('Login successful!');
    const userId = loginResponse.body.userId;  // Save userId for use in the order request

    // Step 2: Place an order with order-service
    const orderData = {
      name: 'Piyumi',
      email: 'piyumi@example.com',
      phone: '1234567890',
      address: '456 Main St',
      items: ['Pizza', 'Pasta'],
      payment: 'Credit Card',
      delivery_time: '1:00 PM',
      special_instructions: 'Extra cheese, please!',
    };

    const orderResponse = await request(orderServiceApp)
      .post('/order')
      .send(orderData);

    expect(orderResponse.status).toBe(201);
    expect(orderResponse.body.name).toBe(orderData.name);
    expect(orderResponse.body.items).toEqual(orderData.items);
    expect(orderResponse.body.id).toBeDefined();  // Ensure an order ID was generated
  });

  it('should return all orders from order-service', async () => {
    const orderResponse = await request(orderServiceApp).get('/orders');
    expect(orderResponse.status).toBe(200);
    expect(Array.isArray(orderResponse.body)).toBe(true);
    expect(orderResponse.body.length).toBeGreaterThan(0);  // Ensure there are orders in the system
  });
});
