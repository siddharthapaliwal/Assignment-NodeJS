const request = require('supertest');
const chai = require('chai');
const app = require('../app'); // Import the app
const expect = chai.expect; // Chai's 'expect' style for assertions

describe('Express Routes Testing', () => {

  // Test for GET /hello route
  describe('GET /hello', () => {
    it('should return a 200 status and a message', (done) => {
      request(app)
        .get('/hello')
        .expect(200) // Expecting 200 OK status
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body.message).to.equal('Hello, world!');
          done();
        });
    });
  });

  // Test for POST /data route with valid data
  describe('POST /data', () => {
    it('should return a 201 status and the data received', (done) => {
      const requestBody = { name: 'John Doe', age: 30 };

      request(app)
        .post('/data')
        .send(requestBody)
        .expect(201) // Expecting 201 Created status
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body.message).to.equal('Data received');
          expect(res.body.data.name).to.equal('John Doe');
          expect(res.body.data.age).to.equal(30);
          done();
        });
    });

    it('should return a 400 status when name or age is missing', (done) => {
      const requestBody = { name: 'John Doe' };

      request(app)
        .post('/data')
        .send(requestBody)
        .expect(400) // Expecting 400 Bad Request status
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body.error).to.equal('Name and age are required');
          done();
        });
    });
  });

  // Test for GET /error route to test error handling
  

});
