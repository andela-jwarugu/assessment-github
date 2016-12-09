const members = require('../controller/members');

module.exports = function(app) {
  app.get('/api/members', members.fetch)
}
