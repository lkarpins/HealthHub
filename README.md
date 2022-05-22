<img width="230" alt="Health Hub Lable" src="https://user-images.githubusercontent.com/95496577/169706412-03739a11-373c-439f-998f-174dde44173f.png"> 

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Abstract](#abstract)
- [Illustration](#illustration)
- [Wireframe](#wireframe)
- [Technologies Used](#technologies-used)
- [Context and Features](#context-and-features)
- [Lessons Learned](#lessons-learned)
- [Future Features](#future-features)
- [Application Set-Up](#application-set-up)
- [Contributor LinkedIn and GitHub](#contributor-linkedin-and-github)
- [Project Specs](#project-specs)

## Abstract

- The _HealthHub_ Project was designed to test my fellow project collaborators and I on our abilities to implement ES6 classes, use array and object prototype methods for data manipulation, create an easy to use and understand dashboard with clearly displayed information, make network requests to retrieve data and practice our TDD skills with Mocha/Chai. It’s a health and wellness application that showcases wellness information for a random user. 

## Illustration

![HealthHub Recording](https://user-images.githubusercontent.com/95496577/169706726-6dc58550-073f-4af8-89a8-c24313bcb7bc.gif)

## Wireframe

- [Figma Wireframe](https://www.figma.com/file/MAcq55QYBdenQxU3mBVcVz/FitLit-Wireframe?node-id=0%3A1) 

<img width="721" alt="New Wire Frame Layout" src="https://user-images.githubusercontent.com/95496577/169707014-ea0f4135-dca2-4ea0-8bbe-2e4e7047f150.png">

## Technologies Used
- CSS
- HTML
- Fetch API
- JavaScript
- Mocha & Chai
- Webpack

## Context and Features

- HelathHub is a health and wellness application. Upon page load, the site displays a user’s information (name, address, and email), hydration data, and sleep data. It compares their daily step goal to an average amongst a database of users. The site also greets the user by their first name at the top of the web page. This application was created using Webpack, which is a modular bundler used to group HTML, CSS, and JavaScript files into more efficient files for a browser to read. It also accounts for npm packages, which our application includes many of. 

- We made use of many packages to bring our application together including `Normalize.css` and `Charts.js`. The `Normalize.css` package allowed us to make our application render more consistently on different browsers. The `Charts.js` package allowed us to create charts that represent our weekly data for user hydration and sleep patterns. Both of these charts are dynamic and generated based on the data for a specific user. They are displayed in our HealthHub widgets. The widgets also display daily and average information for each respective data type in an appealing and eye catching manner.  

- We implemented Test Driven Development into our development process for this application. All of our classes that were built to accommodate our respective data types were thoroughly tested using the mocha testing framework and the chai assertion library. In order for us to test the data that we fetched from our provided API’s properly, we decided to take a sample size from the data for each API, and test all of the data locally. However, we made all of our methods dynamic in order to ensure that said methods would work for the larger data sets provided to us by our API’s. Fetching the data from said API’s is what allows our application to GET and display said data for 50 different users over years of time. 


## Lessons Learned

- Building this application introduced many new concepts to my fellow collaborators and I. This was our first time using Webpack, installing npm packages, and fetching data from API’s. Running Webpack from our console’s had somewhat of a learning curve to it, but seeing how it updated our application in real time was very satisfying. Knowing that it allowed us to install and make use of some wonderfully robust npm packages makes Webpack appear superior and better to use than merely running index.html files locally. Although this wasn’t our first time writing test assertions for classes, the scope of this project was certainly larger than any my fellow collaborators and I have tackled in the past. The amount of tests and methods that we all wrote were certainly wins for us, especially the ones that made use of  prototype iterator methods. 

- The most challenging aspect of this project was writing network requests to fetch data from the provided API’s. The syntax on these GET requests were initially very tricky for my collaborators and I to write. We had to make use of the `then()` prototype method in conjunction with the `json()` method to resolve promises and parse the data into a usable and applicable form. We also made sure to include the `catch()` method in all of our fetch API functions. Lastly, the trickiest part of this entire process was tieing the data from our API’s together with our data model and our DOM. We did so by incorporating the data from our API calls into our pre-developed classes, and writing a function in our `scripts.js` file that made one final use of `.then()` to tie our data to our class instances in `scripts.js`. This allowed us to manipulate and display said data on our DOM. Accessing and connecting all of this data was a challenging but rewarding learning experience for my fellow collaborators and I.   