const chai = require('chai');

const { expect } = chai.expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const baseUrl = 'http://localhost:9000';
const path = '/login';
let token;

describe('login method', async () => {
    it('should return 200 when given emailId does not exist ', (done) => {
        chai.request(baseUrl)
            .post(path)
            .set('content-type', 'application/json')
            .set('language', 'en')
            .field('select', 1)
            .field('value', 'jani@gmail.com')
            .field('password', 'jani')
            .end((error, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('message');
                done();
            });
    });

    it('should return 200 when password is wrong  ', (done) => {
        chai.request(baseUrl)
            .post(path)
            .set('content-type', 'application/json')
            .set('language', 'en')
            .field('select', 1)
            .field('value', 'karimulla1696@gmail.com')
            .field('password', 'karimulla123')
            .end((error, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('message');
                done();
            });
    });

    it('should return 200 when user login successfully ', (done) => {
        chai.request(baseUrl)
            .post(path)
            .set('content-type', 'application/json')
            .set('language', 'en')
            .field('select', 1)
            .field('value', 'karimulla1696@gmail.com')
            .field('password', 'karimulla123')
            .end((error, res) => {
                token = res.body.data.token;
                process.env.token = token;
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('message');
                done();
            });
    });
});