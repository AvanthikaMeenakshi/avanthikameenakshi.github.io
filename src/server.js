const express = require('express');

const path = require('path');

const app = express();

const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, '../public')));

app.get('*', function (req, res) {
  res.set('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(port);
