const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

//api url
const baseURL = "https://api.meaningcloud.com/reputation-2.0";
const apiKey = process.env.API_KEY;

//double checking if you got your api key
console.log(`Your API key is ${process.env.API_KEY}`);

//POST Method
app.post('/add', async (req, res) => {
    const data = req.body;
    const resData = await fetch(`${baseURL}?key=${apiKey}&url=${data.url}&lang=en`, {method : "POST"});
    try{
        const result = await resData.json();
        res.send(result);
    }catch(error){
        console.log("error", error);
    }
});