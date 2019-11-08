const chai = require('chai');

const { expect } = chai.expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const baseUrl = 'http://localhost:9000';
const path = '/updateUser';

describe('Should update the user', async () => {
    it('should return 401 when user is un authenticate or pass invalid token', (done) => {
        chai.request(baseUrl)
            .patch(path)
            .set('content-type', 'application/json')
            .set('language', 'en')
            .field('city', 'vijayawada')
            .end((error, res) => {
                expect(res).to.have.status(401);
                expect(res.body).to.have.property('message');
                done();
            });
    });

    it('should return 200 when user successfully updated data', (done) => {
        chai.request(baseUrl)
            .patch(path)
            .set('content-type', 'application/json')
            .set('language', 'en')
            .set('authorization', process.env.token)
            .field('city', 'Mumbai')
            .end((error, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('message');
                done();
            });
    });
});