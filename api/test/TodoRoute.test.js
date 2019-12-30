/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();
const server = require('../app');

chai.use(chaiHttp);

describe('Test Todo Route Tests', () => {
  it('(GET /todolist) should return 200.', (done) => {
    chai.request(server)
      .get('/api/todolist')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('(GET /todolist) body.data should be a array.', (done) => {
    chai.request(server)
      .get('/api/todolist')
      .end((err, res) => {
        res.body.data.should.be.a('array');
        done();
      });
  });
});
