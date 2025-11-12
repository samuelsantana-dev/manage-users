require('dotenv').config();
import Router from './src/routes/index'
import express from 'express';
import path from 'path';
import connectDb from './src/config/index';
const cors = require('cors');

const port = process.env.PORT || 3000;
const app = express();

// Config JSON and form data response
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: '*' }));

app.use('/api', Router); 

connectDb();
// require('./src/config/index');

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

