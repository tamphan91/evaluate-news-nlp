# Project Instructions

This repo is your starter code for the project. It is the same as the starter code we began with in lesson 2. Install and configure Webpack just as we did in the course. Feel free to refer to the course repo as you build this one, and remember to make frequent commits and to create and merge branches as necessary!

The goal of this project is to give you practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

On top of that, I want to introduce you to the topic of Natural Language Processing. NLPs leverage machine learning and deep learning create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve. Full disclosure, this is the Wikipedia definition, but I found it to be a clear one:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

You could spend years and get a masters degree focusing on the details of creating NLP systems and algorithms. Typically, NLP programs require far more resources than individuals have access to, but a fairly new API called Aylien has put a public facing API in front of their NLP system. We will use it in this project to determine various attributes of an article or blog post.

## Getting started

It would probably be good to first get your basic project setup and functioning. Follow the steps from the course up to Lesson 4 but don't add Service Workers just yet. We won't need the service workers during development and having extra caches floating around just means there's more potential for confusion. So, fork this repo and begin your project setup.

Remember that once you clone, you will still need to install everything:

`cd` into your new folder and run:
- `npm install`

## Setting up the API

The Aylien API is perhaps different than what you've used before. It has you install a node module to run certain commands through, it will simplify the requests we need to make from our node/express backend.

### Step 1: Getting started

Get started by following the steps from the course up to Lesson 4 but don't add Service Workers just yet to avoid having extra caches floating around and creating avenue for confusion. 

Remember that once you clone, you will still need to install everything:

`cd` into your new folder and run:
- `npm install`
And, 

### Step 2: Setting up the API

You do not need an application_id for MeaningCloud API. Refer here to setup account```https://www.meaningcloud.com/developer/account/subscriptions```. Once you create an account with MeaningCloud, you will be given a license key to start using the API. 

### Step 3: Setup the meaningcloud API
Set up your server/index.js file.
Refer to: ```https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1/examples)``` to setup the API in the server/index.js file.```

### Step 4: Environment Variables
Next we need to declare our API keys, which will look something like this:
```
// set meaningcloud API key
const apiKey = process.env.API_KEY;
```

...but there's a problem with this. We are about to put our personal API keys into a file, but when we push, this file is going to be available PUBLICLY on Github. Private keys, visible publicly are never a good thing. So, we have to figure out a way to make that not happen. The way we will do that is with environment variables. Environment variables are pretty much like normal variables in that they have a name and hold a value, but these variables only belong to your system and won't be visible when you push to a different environment like Github.

- [ ] Use npm or yarn to install the dotenv package ```npm install dotenv```. This will allow us to use environment variables we set in a new file
- [ ] Create a new ```.env``` file in the root of your project
- [ ] Go to your .gitignore file and add ```.env``` - this will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API keys was pointless.
- [ ] Fill the .env file with your API keys like this:
```
API_KEY=**************************
```
- [ ] Add this code to the very top of your server/index.js file:
```
const dotenv = require('dotenv');
dotenv.config();
```
- [ ] Reference variables you created in the .env file by putting ```process.env``` in front of it, an example might look like this:
```
console.log(`Your API key is ${process.env.API_KEY}`);
```

### Step 5: Using the API

You can check out the documentation of the MeaningCloud API here```(https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1/examples)``` to use for the different programming languages. 

## After the MeaningCloud API

After this, be sure you are following all the requirements in the project rubric in the classroom to make sure you're in the direction.

## Deploying

A great step to take with your finished project would be to deploy it! Unfortunately its a bit out of scope for me to explain too much about how to do that here, but checkout [Netlify](https://www.netlify.com/) or [Heroku](https://www.heroku.com/) for some really intuitive free hosting options.
