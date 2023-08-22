const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const mockAPIResponse = require('./mockAPI.js')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express()

// Configuring express to use body-parser as middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross-origin
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

//api url
const baseURL = "https://api.meaningcloud.com/sentiment-2.1";
const apiKey = process.env.API_KEY;

//double checking if you got your api key
console.log(`Your API key is ${process.env.API_KEY}`);

//POST Method
app.post('/analyze', async (req, res) => {
    const data = req.body;
    const resData = await fetch(`${baseURL}?key=${apiKey}&url=${data.url}&lang=en`, {method : "POST"});
    try{
        const result = await resData.json();
        res.send(result);
    }catch(error){
        console.log("error", error);
    }
});