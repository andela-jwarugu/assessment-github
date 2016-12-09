const request = require('superagent');

module.exports = {
  fetch: function(req, res) {
    request
      .get('https://api.github.com/orgs/andela/members')
      .auth(process.env.USERNAME, process.env.PASSWORD, {type: 'auto'})
      .end((err, response) => {
        if(err) {
          res.status(500).send({
            message: 'Error occured during the fetch of andela members'
          })
        } else {
          let members = response.body.map((member) => {
            return member.login
          });
          res.status(200).send(members);
        }
      })
  },

  find: function(req, res) {
    
  }
}
