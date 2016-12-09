const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./server/routes');

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

routes(app);

app.listen(3000, function() {
  console.log('App listening port 3000');
})

module.exports = app;
