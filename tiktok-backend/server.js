import express from 'express'
import mongoose from 'mongoose'
/* in the following import line, we must write data.js not data only,
this is the way it works with importing js files in nodeJS */
import data from './data.js';

//App config
const app = express();
const port = 9000;

//Middleware

//DB config

//API endpoints
app.get('/',(req,res) => res.status(200).send('hello world !'))

app.get('/v1/posts', (req,res) => res.status(200).send(data));


//Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`))