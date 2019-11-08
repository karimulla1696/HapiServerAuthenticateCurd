const chai = require('chai');

const { expect } = chai;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const baseUrl = 'http://localhost:3000';
const path = '/deleteUser';

describe('delete method ', async() => {
    it('should return 401 when user is un authenticate or pass invalid token', (done) => {
        chai.request(baseUrl)
            .delete(path)
            .set('content-type', 'application/json')
            .set('language', 'en')
            .end((error, res) => {
                expect(res).to.have.status(401);
                expect(res.body).to.have.property('message');
                done();
            });
    });

    it('should return 200 when user is authenticated and user deleted successfully', (done) => {
        chai.request(baseUrl)
            .delete(path)
            .set('content-type', 'application/json')
            .set('language', 'en')
            .set('authorization', process.env.token)
            .end((error, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('message');
                done();
            });
    });
});