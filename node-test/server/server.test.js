const request = require('supertest');
const expect = require('expect');

const server = require('./server');
const app = server.app;

describe("App Server", () => {

  describe("GET /", () => {
    it("should return hello world response on the index route", (done) => {
      request(app)
        .get('/')
        .expect(200)
        .expect('Hello World')
        .end(done)
    });
  });

  describe("GET /not-found", () => {
    it("should return errors and Name on the not-found page", (done) => {
      request(app)
        .get('/not-found')
        .expect(404)
        .expect({
          error: 'Page not found.',
          name: 'Node Test App'
        })
        .end(done)
    });

    it("should return name of website on page", (done) => {
      request(app)
        .get('/not-found')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Node Test App'
          });
        })
        .end(done)
    });
  });

  describe("GET /users", () => {
    it("should return an array of users", (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body.users).toInclude({
            name: 'Gabriel'
          });
        })
        .end(done)
    });
  });
});
