const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe, it } = require('mocha');
const expect = chai.expect;
const env = require('../config/environments.json');

chai.use(chaiHttp);

describe('Verification page status, header, body', () => {
	it('Verifying Status code is 200', () => {
		chai.request(env.uri)
			.get('/')
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(200);
            });
        });

	it('Verifying an http response header', () => {
		chai.request(env.uri)
			.get('/')
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.header('content-type', 'application/json; charset=utf-8');
            });
        });

	it('Verifying an http response body', () => {
		chai.request(env.uri)
			.get('/')
			.end((err, res) => {
				const Body = res.body;
				const count = Body.length;
				expect(err).to.be.null;
				expect(res.body).to.be.an('array');
				expect(count).to.be.eql(10);
            });
        });
});