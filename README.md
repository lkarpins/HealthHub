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

- The _HealthHub_ Project was designed to test my fellow project collaborators  and I on our abilities to implement ES6 classes, use array and object prototype methods for data manipulation, create an easy to use and understand dashboard with clearly displayed information, make network requests to retrieve data, and practice our TDD skills with Mocha/Chai. It’s a health and wellness application that showcases wellness information for a random user. 

## Illustration


https://user-images.githubusercontent.com/98505112/169926124-719110ed-3740-4148-8bb8-62f93643deaf.mp4


## Wireframe

- [Figma Wireframe](https://www.figma.com/file/MAcq55QYBdenQxU3mBVcVz/FitLit-Wireframe?node-id=0%3A1) 

<img width="721" alt="New Wire Frame Layout" src="https://user-images.githubusercontent.com/95496577/169707014-ea0f4135-dca2-4ea0-8bbe-2e4e7047f150.png">

## Technologies Used

- Chart.js
- CSS
- HTML
- Fetch API
- JavaScript
- Mocha & Chai
- Normalize.css
- Webpack

## Context and Features

- _HelathHub_ is a health and wellness application. Upon page load, the site displays a user’s information (name, address, and email), hydration data, and sleep data. It compares their daily step goal to an average amongst a database of users. The site also greets the user by their first name at the top of the web page. This application was created using Webpack, which is a modular bundler used to group HTML, CSS, and JavaScript files into more efficient files for a browser to read. It also accounts for npm packages, which our application includes many of. 

- We made use of many packages to bring our application together. These packages include `Normalize.css` and `Chart.js`. The `Normalize.css` package allowed us to make our application render more consistently on different browsers. The `Chart.js` package allowed us to create charts that represent our weekly data for user hydration, and sleep patterns. Both of these charts are dynamic, and generated based on the data for a specific user. They are displayed in our _HealthHub_ widgets. The widgets also display daily and average information for each respective data type in an appealing and eye catching manner.  

- We implemented Test Driven Development into our development process for this application. All of our classes built to accommodate our respective data types were thoroughly tested using the mocha testing framework and the chai assertion library. In order for us to test the data that we fetched from our provided API’s properly, we decided to take a sample size from the data for each API, and test all of the data locally. However, we made all of our methods dynamic in order to ensure that said methods would work for the larger data sets provided to us by our API’s. Fetching the data from said API’s is what allows our application to GET and display said data for 50 different users over years of time. 

## Lessons Learned

- Building this application introduced many new concepts to my fellow collaborators and I. This was our first time using Webpack, installing npm packages, and fetching data from API’s. Running Webpack from our console’s had somewhat of a learning curve to it, but seeing how it updated our application in real time was very satisfying. Knowing that it allowed us to install and make use of some wonderfully robust npm packages makes Webpack appear superior, and better to use than merely running index.html files locally. Although this wasn’t our first time writing test assertions for classes, the scope of this project was certainly larger than any my fellow collaborators and I have tackled in the past. The amount of tests and methods that we all wrote were certainly wins for us, especially the ones that made use of prototype iterator methods. 

- The most challenging aspect of this project was writing network requests to fetch data from the provided API’s. The syntax on these GET requests were initially very tricky for my collaborators and I to write. We had to make use of the `then()` prototype method in conjunction with the `json()` method to resolve promises, and parse the data into a usable and applicable form. We also made sure to include the `catch()` method in all of our fetch API functions. Lastly, the trickiest part of this entire process was tieing the data from our API’s together with our data model and our DOM. We did so by incorporating the data from our API calls into our pre-developed classes, and writing a function in our `scripts.js` file that made one final use of `.then()` to tie our data to our class instances in `scripts.js`. This allowed us to manipulate and display said data on our DOM. Accessing and connecting all of this data was a challenging but rewarding learning experience for my fellow collaborators and I.   

## Future Features

Some future features we’d like to add to this application are:

- Fetching and displaying more activity data for the user. 
- Having a step challenge between friends.
- Dragging and dropping displayed widgets.
- An admin view where an admin is able to view trends for all users. 

## Application Set-Up

1. Fork repository on GitHub.

2. `Git clone` the repository to your local machine.

3. `Cd` into the directory.

4. Run `npm install` in your terminal to install project dependencies.

5. Run `npm start` in the terminal to see the application. 

6. When finished with the application, be sure to type `Control + C` to stop running the application. 

## Contributor LinkedIn’s

- [Lidia Karpinski : LinkedIn](https://www.linkedin.com/in/lidia-karpinski/)  
- [Michael Harrison: LinkedIn](https://www.linkedin.com/in/michael-harrison-b476a498/)   
- [Rachel Allen: LinkedIn](https://www.linkedin.com/in/rachel-lynn-allen/)  
 
## Contributor GitHubs’s

- [Lidia Karpinski : GitHub](https://github.com/lkarpins) 
- [Michael Harrison: GitHub](https://github.com/mikeharrison57) 
- [Rachel Allen: GitHub](https://github.com/Rallen13) 

## Project Specs

- The spec for this application can be found [here](https://frontend.turing.edu/projects/Fitlit-part-one.html)     
