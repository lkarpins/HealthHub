// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// console.log(userData, "<>>>>userData");
// An example of how you tell webpack to use a CSS file
import "./css/styles.css";

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import "./images/turing-logo.png";

// console.log("This is the JavaScript entry file - your code begins here.");

// An example of how you tell webpack to use a JS file

import userData from "./data/users";
import User from "./User";
import UserRepository from "./UserRepository";

import apiCalls from "./apiCalls";
// console.log(apiCalls.fetchData());

// Query Selectors
const welcomeMessage = document.querySelector('#welcomeMessage');
const userInfoCard = document.querySelector('#userInfo');

// Class Instances
let  user, userRepo, hydration, sleep;

// Functions

const loadPage = () => {
  generateUserCard();
  welcomeUser();
}

const getRandomIndex = (array)=> {
  return Math.floor(Math.random() * array.length);
}

const fetchApiCalls = () => {
  apiCalls.fetchData().then(data => {
    let userData = data[2].userData;
    let hydrationData = data[0].hydrationData;
    let sleepData = data[1].sleepData;
    let randomUser = getRandomIndex(userData);
    userRepo = new UserRepository(userData);  
    user = new User(userRepo.findUser(randomUser));
    console.log(user)
    loadPage();
  })
};

const welcomeUser = () => {
  welcomeMessage.innerHTML = `Hello ${user.returnFirstName()} ! Welcome to HealthHub!`
}

const generateUserCard = () => {
  userInfoCard.innerText = 
  `Name: ${user.name} 
  Address: ${user.address} 
  Email: ${user.email}
  Daily Step Goal: ${user.dailyStepGoal}
  `
}

// Event Listeners
window.addEventListener('load', fetchApiCalls);
// userInfoCard.addEventListener('load', generateUserCard)
