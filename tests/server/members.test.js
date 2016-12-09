const expect = require('chai').expect;
const app = require('../../index');
const request = require('supertest')(app);

describe('fetching members controller', () => {
  it('returns a list of members from github', (done) => {
    request
      .get('/api/members')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.exist;
        expect(Array.isArray(res.body)).to.be.true;
        expect(res.body).to.have.length(30);
        done();
      })
  })

  it('returns an object with specific user details', (done) => {
    request
      .get('/api/members/andela-jwarugu')
      .end((err, res) => {
        console.log(res.body);
        expect(res.status).to.equal(200);
        expect(res.body).to.exist;
        expect(res.body).to.be.an.object;
        expect(res.body.name).to.exist;
        expect(res.body.followers).to.exist;
        expect(res.body.following).to.exist;
        expect(res.body.repos).to.exist;
        // expect(res.body).to.have.keys('name', 'followers', 'following', 'repos');
        expect(res.body.login).to.equal('andela-jwarugu');
        done();
      })
  })
})
