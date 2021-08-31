import express from 'express'
import mongoose from 'mongoose'
/* in the following import line, we must write data.js not data only,
this is the way it works with importing js files in nodeJS */
import data from './data.js'
import Videos from './dbModel.js'

//App config
const app = express();
const port = 9000;

//Middleware
app.use(express.json());
app.use((req, res, next) => {
    res.setHeaders('Access-Control-Allow-Origin','*'),
    res.setHeaders('Access-Control-Allow-Headers','*'),
    next();
})


//DB config
const connection_url = 'mongodb+srv://BassilOraby:vFF74EhiyJ&r%23%2F4@cluster0.j9atw.mongodb.net/tutorialDB?retryWrites=true&w=majority';
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



//API endpoints
app.get('/',(req,res) => res.status(200).send('hello world !'))

app.get('/v1/posts', (req,res) => res.status(200).send(data));

app.get('/v2/posts', (req,res) => {
    Videos.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).send(data);
        }
    })
})

app.post('/v2/posts', (req,res) => {
    const dbVideos = req.body
    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(201).send(data);
        }
    })
})


//Listener for incoming connections with the server
app.listen(port, () => console.log(`listening on localhost: ${port}`))