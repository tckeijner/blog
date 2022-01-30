import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import cors from 'cors';

const port = 4000;

//Create express app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Use custom routes
app.use('/', routes);

app.listen(port, () => {
  console.log('Now listening on port', port);
});

