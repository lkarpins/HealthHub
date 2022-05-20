// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// console.log("This is the JavaScript entry file - your code begins here.");
// An example of how you tell webpack to use a JS file
// An example of how you tell webpack to use a CSS file

// Imports
import "./css/styles.css";
import userData from "./data/users";
import User from "./User";
import UserRepository from "./UserRepository";
import apiCalls from "./apiCalls";

// Query Selectors
const welcomeMessage = document.querySelector('#welcomeMessage');
const userInfoCard = document.querySelector('#userInfo');
const averageSteps = document.querySelector('#averageSteps')

// Class Instances
let  user, userRepo, hydration, sleep;

// Functions

const loadPage = () => {
  generateUserCard();
  welcomeUser();
  compareAverageStepGoal();
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

const compareAverageStepGoal = () => {
  let averageUserSteps = userRepo.averageStepGoal();
  averageSteps.innerHTML = `Community Average Step Goal: ${averageUserSteps}`
}

// Event Listeners
window.addEventListener('load', fetchApiCalls);
