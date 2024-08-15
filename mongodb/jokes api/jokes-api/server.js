const express = require('express');
const dotenv = require('dotenv');
const app = express();
const port = 8000;

dotenv.config();
require('./config/mongoose.config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const jokeRoutes = require('./routes/jokes.routes');
jokeRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));
