require('dotenv').config();
const express = require('express');
const connectDb = require('./config');
const path = require('path');
const cors = require('cors');

const port = process.env.PORT || 3000;
const app = express();

// Config JSON and form data response
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = require('./routes');
app.use('/api', router);

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

require('./src/config/index');

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

