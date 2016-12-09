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
    let username = req.params.username;
    request
      .get('https://api.github.com/users/' + username)
      .auth(process.env.USERNAME, process.env.PASSWORD, {type: 'auto'})
      .end((err, response) => {
        if(err) {
          res.status(500).send({
            message: 'Error occured while fetching user'
          })
        } else {
          let login = response.body.login;
          let name = response.body.name;
          let followers = response.body.followers;
          let following = response.body.following;
          let repos = response.body.public_repos;

          res.status(200).send({
            login,
            name,
            followers,
            following,
            repos
          })
        }
       })
  }
}
