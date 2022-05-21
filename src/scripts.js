// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// console.log("This is the JavaScript entry file - your code begins here.");
// An example of how you tell webpack to use a JS file
// An example of how you tell webpack to use a CSS file

// Imports
import "normalize.css";
import "./css/styles.css";
// import userData from "./data/users";
import User from "./User";
import UserRepository from "./UserRepository";
import Hydration from "./Hydration";
import Sleep from "./Sleep";
import apiCalls from "./apiCalls";

// Query Selectors
const welcomeMessage = document.querySelector("#welcomeMessage");
const userInfoCard = document.querySelector("#userInfo");
const averageSteps = document.querySelector("#averageSteps");
const dailyIntakeCard = document.querySelector("#dailyIntake");
const weeklyIntakeCard = document.querySelector("#weeklyIntake");
const dailyHoursSlept = document.querySelector("#dailyHoursSlept");
const dailySleepQuality = document.querySelector("#dailyQualityHoursSlept");
const weeklyHoursSlept = document.querySelector("#weeklyHoursSlept");
const weeklySleepQuality = document.querySelector("#weeklyQulaityHoursSlept");
// const avgHoursSlept = document.querySelector('#averageSleepHours');
const avgSleepQuality = document.querySelector("#averageSleepQuality");

// Class Instances
let user, userRepo, hydration, sleep;

// Functions
const getRandomIndex = array => {
  return Math.floor(Math.random() * array.length + 1);
};

const fetchApiCalls = () => {
  apiCalls.fetchData().then(data => {
    let userData = data[2].userData;
    let hydrationData = data[0].hydrationData;
    let sleepData = data[1].sleepData;
    let randomUser = getRandomIndex(userData);
    userRepo = new UserRepository(userData);
    user = new User(userRepo.findUser(randomUser));
    hydration = new Hydration(user.id, hydrationData);
    sleep = new Sleep(user.id, sleepData);
    loadPage();
  });
};

const loadPage = () => {
  generateUserCard();
  welcomeUser();
  compareAverageStepGoal();
  displayDailyIntake();
  displayDailyOunces();
  displayDailySleepHours();
  displayQualitySleep();
  displayWeeklySleepHours();
  displayWeeklyQuality();
  displayAverageQuality();
};

const welcomeUser = () => {
  welcomeMessage.innerHTML = `Hello ${user.returnFirstName()} ! Welcome to HealthHub!`;
};

const generateUserCard = () => {
  userInfoCard.innerText = `Name: ${user.name}
  Address: ${user.address}
  Email: ${user.email}
  Daily Step Goal: ${user.dailyStepGoal}
  `;
};

const compareAverageStepGoal = () => {
  let averageUserSteps = userRepo.averageStepGoal();
  averageSteps.innerHTML = `Community Average Step Goal: ${averageUserSteps}`;
};

const displayDailyIntake = () => {
  let dailyIntake = hydration.returnDailyOunces(hydration.date);
  dailyIntakeCard.innerHTML = `Daily Intake: ${dailyIntake} oz.`;
};

const displayDailyOunces = () => {
  let weeklyIntake = hydration.returnWeeklyOunces(hydration.date);
  weeklyIntake.forEach(entry => {
    const singleEntry = `<br/>
    <br/>
    Date: ${entry.date}
    <br/>
    <br/>
    Amount: ${entry.numOunces} oz.`;
    weeklyIntakeCard.innerHTML += singleEntry;
  });
};

const displayDailySleepHours = () => {
  let dailySleep = sleep.sleptHoursPerDay(sleep.date);
  dailyHoursSlept.innerHTML = `Daily Hours Slept: ${dailySleep}`;
};

const displayQualitySleep = () => {
  let dailyQuality = sleep.sleepQualityPerDay(sleep.date);
  dailySleepQuality.innerHTML = `Daily Quality Sleep Hours: ${dailyQuality}`;
};

const displayWeeklySleepHours = () => {
  let weeklySleep = sleep.sleptHoursPerDayPerWeek(sleep.date);
  weeklySleep.forEach(entry => {
    const singleEntry = `<br/>
    <br/>
    Date: ${entry.date}
    <br/>
    <br/>
    Hours: ${entry.hoursSlept}`;
    weeklyHoursSlept.innerHTML += singleEntry;
  });
};

const displayWeeklyQuality = () => {
  let weeklyQuality = sleep.sleepQualityPerDayPerWeek(sleep.date);
  weeklyQuality.forEach(entry => {
    const singleEntry = `<br/>
    <br/>
    Date: ${entry.date}
    <br/>
    <br/>
    Quality Hours: ${entry.sleepQuality}`;
    weeklySleepQuality.innerHTML += singleEntry;
  });
};

const displayAverageQuality = () => {
  let averageQuality = sleep.avgSleepQualityAllUsers();
  avgSleepQuality.innerHTML = `All Time Average Sleep Quality: ${averageQuality}`;
};

// Event Linsteners
window.addEventListener("load", fetchApiCalls);
