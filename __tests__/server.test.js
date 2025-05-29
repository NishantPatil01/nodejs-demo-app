const request = require('supertest');
const app = require('../server'); // Import the Express app

test('GET / should return Hello, Nishant! Your Node.js app is running.', async () => {
  const response = await request(app).get('/'); // No need to call app.listen()
  expect(response.text).toBe('Hello, Nishant! Your Node.js app is running.');
});

