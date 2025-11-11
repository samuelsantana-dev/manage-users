require('dotenv').config();
import Router from './src/routes/index'
import express from 'express';
import path from 'path';
// const connectDb = require('./config');
const cors = require('cors');

const port = process.env.PORT || 3000;
const app = express();

// Config JSON and form data response
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', Router); 

app.use(cors({ credentials: true, origin: '*' }));

// require('./src/config/index');

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

