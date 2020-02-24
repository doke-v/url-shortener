const express = require('express');
const urlShortenerRoutes = require('./');
const app = express();

app.use('/', urlShortenerRoutes);

app.listen(3000);
