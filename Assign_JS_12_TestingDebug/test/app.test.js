const request = require('supertest');
const app = require('../app'); // Import the Express app
const chai = require('chai');
const expect = chai.expect;

describe('User API', () => {
  let createdUserId;

  // Test for GET /users route
  describe('GET /users', () => {
    it('should return an empty array when no users are present', async () => {
      const res = await request(app).get('/users');
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('array');
      expect(res.body.length).to.equal(0);
    });

    it('should return a list of users when users are present', async () => {
      // Add a user first
      await request(app).post('/users').send({ name: 'John Doe', email: 'john@example.com' });

      const res = await request(app).get('/users');
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('array');
      expect(res.body.length).to.equal(1);
      expect(res.body[0]).to.have.property('name', 'John Doe');
      expect(res.body[0]).to.have.property('email', 'john@example.com');
    });
  });

  // Test for POST /users route
  describe('POST /users', () => {
    it('should create a new user when valid data is provided', async () => {
      const res = await request(app)
        .post('/users')
        .send({ name: 'Jane Doe', email: 'jane@example.com' });
      
      expect(res.status).to.equal(201);
      expect(res.body).to.have.property('name', 'Jane Doe');
      expect(res.body).to.have.property('email', 'jane@example.com');
      createdUserId = res.body.email;
    });

    it('should return a 400 error when name or email is missing', async () => {
      const res = await request(app).post('/users').send({ name: '', email: 'no-name@example.com' });
      expect(res.status).to.equal(400);
      expect(res.body).to.have.property('error', 'Name and email are required.');
    });
  });
});
