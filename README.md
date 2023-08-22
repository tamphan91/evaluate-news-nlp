# Evaluate News NLP

## Project Description

This project required me to implement an NLP API into a web application, while also applying webpack and other build tools onto it. The API that was used for this app is the <a href="https://www.meaningcloud.com/developer/sentiment-analysis">Open Sentiment Analysis (Meaning Cloud) API</a>.

## Usage
To use this app, you'll need to get an API from <a href="https://www.meaningcloud.com/developer/sentiment-analysis">Meaning Cloud</a>. Make sure you have node installed into your desktop, as you'll be using the **"npm"** command. So the first step is after you downloaded this file, you'll need to create an .env file, which should be in the same directory as the package.json. Then save your API_KEY into that file.

````
API_KEY=**********
````

Then you'll need to run the following command line on your terminal, so it has all the required packages. It should create a node_modules folder, so make sure you have that.

````
npm install
````

Afterwards in the terminal, run the command:

````
npm run build-prod
````

This command will create a dist folder that is in the same directory as your src folder, and the dist folder will have all your files in a webpack format. Another reason to run this command is because the server is pointed into that folder as well.


To run the web application you can run the following command line in your terminal.
````
npm start
````
Then in your browser, go to **localhost:8081** where your web app is at. Your web application should look like this and when you enter a url into the textbox it should retrieve you the analysis.

## Starter Code

I used a starter code provided by Udacity - <a href="https://github.com/udacity/fend/tree/refresh-2019" target="_blank">Link to the starter code</a>