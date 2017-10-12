const PORT = process.env.PORT || 8000;

const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const path = require('path');


const app = express();
const server = require('http').createServer(app);

server.listen(PORT, (err) => {
  console.log(err || `Express listening on port ${PORT}`);
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

require('./config/webpack')(app);

app.use('/api', require('./routes/api'));

app.use('/bundle.js', (request, response) => {
  response.sendFile(path.join(__dirname, '../public/bundle.js'));
});

app.use('*', (request, response) => {
  response.sendFile(path.join(__dirname, '../public/index.html'));
});
