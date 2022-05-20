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
import Hydration from "./Hydration"
import Sleep from "./Sleep"
import apiCalls from "./apiCalls";

// Query Selectors
const welcomeMessage = document.querySelector('#welcomeMessage');
const userInfoCard = document.querySelector('#userInfo');
const averageSteps = document.querySelector('#averageSteps');
const dailyIntakeCard = document.querySelector('#dailyIntake');
const weeklyIntakeCard = document.querySelector('#weeklyIntake');

// Class Instances
let  user, userRepo, hydration, sleep;

// Functions

const loadPage = () => {
  generateUserCard();
  welcomeUser();
  compareAverageStepGoal();
  displayDailyIntake(); 
  displayDailyOunces();
}

const getRandomIndex = (array)=> {
  return Math.floor((Math.random() * array.length)+1);
}

const fetchApiCalls = () => {
  apiCalls.fetchData().then(data => {
    let userData = data[2].userData;
    let hydrationData = data[0].hydrationData;
    let sleepData = data[1].sleepData;
    let randomUser = getRandomIndex(userData);
    userRepo = new UserRepository(userData);  
    user = new User(userRepo.findUser(randomUser));
    hydration = new Hydration(user.id, hydrationData);
    loadPage();
  })
};

// Need to tie user to hydration data
// may need to alter class to tie it together with the
// correct user based on the ID 

const welcomeUser = () => {
  welcomeMessage.innerHTML = `Hello ${user.returnFirstName()} ! Welcome to HealthHub!`
};

const generateUserCard = () => {
  userInfoCard.innerText = 
  `Name: ${user.name} 
  Address: ${user.address} 
  Email: ${user.email}
  Daily Step Goal: ${user.dailyStepGoal}
  `
};

const compareAverageStepGoal = () => {
  let averageUserSteps = userRepo.averageStepGoal();
  averageSteps.innerHTML = `Community Average Step Goal: ${averageUserSteps}`
};

const displayDailyIntake = () => {
  let dailyIntake = hydration.returnDailyOunces(hydration.date);
  dailyIntakeCard.innerHTML = `Daily Intake: ${dailyIntake} oz.`
};

const displayDailyOunces = () => {
  let weeklyIntake = hydration.returnWeeklyOunces(hydration.date);
  weeklyIntake.forEach((entry) => {
    const singleEntry = `<br/> 
    <br/>
    Date: ${entry.date}
    <br/>
    <br/>
    Amount: ${entry.numOunces} oz.`
    weeklyIntakeCard.innerHTML += singleEntry;
  })
};

// ### Items to add to the dashboard:

// - For a user, a display to show how much water they have consumed 
// today (these displays are often called “widgets” in the FE tech world)

// - For a user, a display to show much water they have consumed each
//  day over the course of the latest week
// Event Listeners
window.addEventListener('load', fetchApiCalls);
