const chai = require('chai');

const { expect } = chai.expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const baseUrl = 'http://localhost:9000';
const path = '/signup';

describe('signUp method test cases', async () => {
    it('should return 409 when user with given emailId already exist', (done) => {
        chai.request(baseUrl)
            .post(path)
            .set('content-type', 'application/json')
            .field('firstName', 'shaik')
            .field('lastName', 'karimulla')
            .field('emailId', 'karimull1696@gmail.com')
            .field('countryCode', 522616)
            .field('mobile', 9182491215)
            .field('password', 'karimulla123')
            .field('city', 'Bangalore')
            .field('isAdmin', true)
            .end((error, res) => {
                expect(res).to.have.status(409);
                expect(res.body).to.have.property('message');
                done();
            });
    });

    it('should return 409 when user given mobile number already exist', (done) => {
        chai.request(baseUrl)
            .post(path)
            .set('content-type', 'application/json')
            .field('firstName', 'shaik')
            .field('lastName', 'karimulla')
            .field('emailId', 'karimull1696@gmail.com')
            .field('countryCode', 91)
            .field('mobile', 9182491215)
            .field('password', 'karimulla123')
            .field('city', 'Bangalore')
            .field('isAdmin', true)
            .end((error, res) => {
                expect(res).to.have.status(409);
                expect(res.body).to.have.property('message');
                done();
            });
    });

    it('should return 200 when user registered successfully', (done) => {
        chai.request(baseUrl)
            .post(path)
            .set('content-type', 'application/json')
            .field('firstName', 'shaik')
            .field('lastName', 'manjoor')
            .field('emailId', 'manjoor786@gmail.com')
            .field('countryCode', 522616)
            .field('mobile', 9160433420)
            .field('password', 'manjoor123')
            .field('city', 'Guntur')
            .field('isAdmin', false)
            .end((error, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('message');
                done();
            });
    });

});