const chai = require('chai');

const { expect } = chai;
const chaiHttp = require('chai-http');
const server = require('../web/server');

chai.use(chaiHttp);
const baseUrl = 'http://localhost:3000';

before(async () => {
    await server.init();
    await server.start();
});

describe('server check', async () => {
    it('should return 404', (done) => {
        chai.request(baseUrl)
            .get('/')
            .set('content-type', 'application / json')
            .end((error, res) => {
                expect(res).to.have.status(404);
                done();
            });
    });
});

after(async (done) => {
    await server.stop();
    process.exit(0);
    done();
});