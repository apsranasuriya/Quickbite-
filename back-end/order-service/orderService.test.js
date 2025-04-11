const request = require('supertest'); // For testing APIs
const app = require('./server.js'); // Importing the app to test routes

describe('Order Service Unit Tests', () => {
  let server;

  beforeAll(() => {
    server = app.listen(5002); // Optionally start the server for test requests
  });

  afterAll(() => {
    server.close(); // Close the server after tests are done
  });

  it('should create a new order and return the created order', async () => {
    const orderData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
      address: '123 Main St',
      items: ['Pizza', 'Pasta'],
      payment: 'Credit Card',
      delivery_time: '12:30 PM',
      special_instructions: 'No onions on pizza'
    };

    const response = await request(app).post('/order').send(orderData);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe(orderData.name);
  });

  it('should return all orders', async () => {
    const response = await request(app).get('/orders');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
