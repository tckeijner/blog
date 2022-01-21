const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const port = 4000;

const cors = require('cors');

//Create express app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Use custom routes
app.use('/', routes);

app.listen(port, () => {
  console.log('Now listening on port', port);
});
