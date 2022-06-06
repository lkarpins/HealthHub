// Imports
import "normalize.css";
import "./css/styles.css";
import User from "./User";
import UserRepository from "./UserRepository";
import Hydration from "./Hydration";
import Sleep from "./Sleep";
import Activity from "./Activity";
import apiCalls from "./apiCalls";
import chart from "./Chart";

// Query Selectors
const welcomeMessage = document.querySelector("#welcomeMessage");
const userAddress = document.querySelector("#userAddress");
const userEmail = document.querySelector("#userEmail");
const dailySteps = document.querySelector("#dailySteps");
const averageSteps = document.querySelector("#averageSteps");
const dailyNumSteps = document.querySelector("#dailyNumSteps");
const dailyMinsActive = document.querySelector("#dailyMinsActive");
const dailyMilesWalked = document.querySelector("#dailyMilesWalked");
const weeklyAvgMinsActive = document.querySelector("#weeklyAvgMinutesActive");
const dailyIntakeCard = document.querySelector("#dailyIntake");
const weeklyIntakeCard = document.querySelector("#weeklyIntake");
const dailyHoursSlept = document.querySelector("#dailyHoursSlept");
const dailySleepQuality = document.querySelector("#dailyQualityHoursSlept");
const weeklyHoursSlept = document.querySelector("#weeklyHoursSlept");
const weeklySleepQuality = document.querySelector("#weeklyQulaityHoursSlept");
const avgHoursSlept = document.querySelector("#averageSleepHours");
const avgSleepQuality = document.querySelector("#averageSleepQuality");
const userName = document.querySelector("#userName");
const newUserButton = document.querySelector(".main__button");
const averageMinutesActiveAllUsers = document.querySelector(
  "#averageMinutesActiveAllUsers"
);
const averageFlightsAllUsers = document.querySelector(
  "#averageFlightsAllUsers"
);
const averageNumStepsAllUsers = document.querySelector(
  "#averageNumStepsAllUsers"
);

//Form Query Selectors
const updateSleep = document.querySelector("#updateSleep");
const sleepDialog = document.querySelector("#sleepDialog");
const sleepForm = sleepDialog.querySelector("#sleepForm");
const hoursSleptInput = sleepDialog.querySelector("#hoursSlept");
const sleepQualityInput = sleepDialog.querySelector("#sleepQuality");
const confirmSleepBtn = sleepDialog.querySelector("#confirmSleepBtn");
const updateHydro = document.querySelector("#updateHydro");
const hydroDialog = document.querySelector("#hydroDialog");
const hydroForm = hydroDialog.querySelector("#hydroForm");
const numOuncesInput = hydroDialog.querySelector("#numOunces");
const confirmHydroBtn = hydroDialog.querySelector("#confirmHydroBtn");
const updateActivity = document.querySelector("#updateActivity");
const activityDialog = document.querySelector("#activityDialog");
const activityForm = activityDialog.querySelector("#activityForm");
const numStepsInput = activityDialog.querySelector("#numSteps");
const minutesActiveInput = activityDialog.querySelector("#minutesActive");
const flightsOfStairsInput = activityDialog.querySelector("#flightsOfStairs");

// Class Instances
let user, userRepo, hydration, sleep, activity;

//Global Variables
let sleepPostData, todaysSleep, todaysQuality;
let hydroPostData;

// Functions
const getRandomIndex = array => {
  return Math.floor(Math.random() * array.length + 1);
};

const fetchApiCalls = userID => {
  apiCalls.fetchData().then(data => {
    console.log(data);
    let userData = data[2].userData;
    let hydrationData = data[0].hydrationData;
    let sleepData = data[1].sleepData;
    let activityData = data[3].activityData;
    let id;
    if (userID === "load") {
      id = getRandomIndex(userData);
    } else {
      id = userID;
    }
    userRepo = new UserRepository(userData);
    user = new User(userRepo.findUser(id));
    hydration = new Hydration(user.id, hydrationData);
    sleep = new Sleep(user.id, sleepData);
    activity = new Activity(user.id, activityData);
    loadPage();
  });
};

const loadPage = () => {
  displayUserCard();
  welcomeUser();
  displayAverageStepGoal();
  displayDailyStepGoal();
  displayDailyNumSteps();
  displayDailyMinsActive();
  displayDailyMilesWalked();
  displayWeeklyAvgMinsActive();
  displayAvgActivityDataAllUsers();
  displayDailyIntake();
  displayDailySleepHours();
  displayQualitySleep();
  displayAverageQuality();
  displayAverageHoursSlept();
  displayHydrationChart();
  displaySleepChart();
  displayActivityChart();
  displayActivityStepsChart();
};

const refreshPage = () => {
  window.location.reload();
};

const welcomeUser = () => {
  welcomeMessage.innerHTML = `Hello ${user.returnFirstName()}! Welcome to HealthHub!`;
};

const displayUserCard = () => {
  userName.innerHTML = `${user.name}`;
  userAddress.innerHTML = `${user.address}`;
  userEmail.innerHTML = `${user.email}`;
};

const displayAverageStepGoal = () => {
  const averageUserSteps = userRepo.calculateAvgStepGoal();
  averageSteps.innerHTML = `${averageUserSteps}`;
};
const displayDailyStepGoal = () => {
  dailySteps.innerHTML = `${user.dailyStepGoal}`;
};
const displayDailyNumSteps = () => {
  dailyNumSteps.innerHTML = `${activity.numSteps}`;
};
const displayDailyMinsActive = () => {
  dailyMinsActive.innerHTML = `${activity.minutesActive}`;
};
const displayDailyMilesWalked = () => {
  const dailyMilesWalkedResponse = activity.returnDailyMilesWalked(user);
  dailyMilesWalked.innerHTML = `${dailyMilesWalkedResponse}`;
};
const displayWeeklyAvgMinsActive = () => {
  const weeklyAvgMinsActiveResponse = activity.returnAvgMinutesActivePerWeek(
    activity.date
  );
  weeklyAvgMinsActive.innerHTML = `${weeklyAvgMinsActiveResponse}`;
};

const displayAvgActivityDataAllUsers = () => {
  const avgActivityDataAllUsersResponse = activity.returnAvgActivityDataAllUsers(
    activity.date
  );
  averageMinutesActiveAllUsers.innerHTML = `${avgActivityDataAllUsersResponse.avgMinsActiveAllUsers}`;
  averageFlightsAllUsers.innerHTML = `${avgActivityDataAllUsersResponse.avgFlightsAllUsers}`;
  averageNumStepsAllUsers.innerHTML = `${avgActivityDataAllUsersResponse.avgStepsAllUsers}`;
};

const displayDailyIntake = () => {
  const dailyIntake = hydration.returnDailyOunces(hydration.date);
  dailyIntakeCard.innerHTML = `${dailyIntake} oz.`;
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
  let dailySleep = sleep.calculateSleptHoursPerDay(sleep.date);
  dailyHoursSlept.innerHTML = `${dailySleep}`;
};

const displayQualitySleep = () => {
  let dailyQuality = sleep.calculateSleepQualityPerDay(sleep.date);
  dailySleepQuality.innerHTML = `${dailyQuality}`;
};

const displayWeeklySleepHours = () => {
  let weeklySleep = sleep.calculateSleptHoursPerDayPerWeek(sleep.date);
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
  let weeklyQuality = sleep.calculateSleepQualityPerDayPerWeek(sleep.date);
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
  let averageQuality = sleep.calculateAvgSleepQualityAllUsers();
  avgSleepQuality.innerHTML = `${averageQuality}`;
};

const displayAverageHoursSlept = () => {
  let averageHoursSlept = sleep.calculateAvgHoursSleptAllUsers();
  avgHoursSlept.innerHTML = `${averageHoursSlept}`;
};

const displayHydrationChart = () => {
  let weeklyIntakeData = hydration.returnWeeklyOunces(hydration.date);
  chart.horizontalBar(weeklyIntakeData);
};

const displaySleepChart = () => {
  let hours = sleep.calculateSleptHoursPerDayPerWeek(sleep.date);
  let quality = sleep.calculateSleepQualityPerDayPerWeek(sleep.date);
  chart.groupedBar(hours, quality);
};

const displayActivityChart = () => {
  let minutes = activity.returnActiveMinsPerDayPerWeek(activity.date);
  let flights = activity.returnFlightsOfStairsClimbedPerDayPerWeek(
    activity.date
  );
  chart.groupedBar2(minutes, flights);
};

const displayActivityStepsChart = () => {
  let steps = activity.returnNumStepsPerDayPerWeek(activity.date);
  chart.horizontalBar2(steps);
};

//Form Functions
const getTodaysDate = () => {
  const padTodaysDate = num => {
    return num.toString().padStart(2, "0");
  };
  //pad--adds "padding"--adding zero digits to date so that will always result 2 digits

  const formatDate = date => {
    return [
      date.getFullYear(),
      padTodaysDate(date.getMonth() + 1),
      padTodaysDate(date.getDate())
    ].join("/");
  };
  return formatDate(new Date());
};
//new Date()-built-in JS class that creates new date object

const captureHrsSlept = e => {
  if (e.target.name === "sleepQuality") {
    return;
  } else if (
    hoursSleptInput.value &&
    hoursSleptInput.value > 1 &&
    hoursSleptInput.value <= 24 &&
    e.target.name === "hoursSlept"
  ) {
    todaysSleep = hoursSleptInput.value;
  } else {
    hoursSleptInput.value = null;
    return false;
  }
  return todaysSleep;
};

const captureQuality = e => {
  if (e.target.name === "hoursSlept") {
    return;
  } else if (
    sleepQualityInput.value &&
    sleepQualityInput.value > 0 &&
    sleepQualityInput.value <= 5 &&
    e.target.name === "sleepQuality"
  ) {
    todaysQuality = sleepQualityInput.value;
  } else {
    sleepQualityInput.value = 3;
    return false;
  }
  return todaysQuality;
};

// Event Listeners
window.addEventListener("load", fetchApiCalls("load"));
newUserButton.addEventListener("click", refreshPage);

//Form Event Listeners
updateHydro.addEventListener("click", function onOpen() {
  hydroDialog.showModal();
});
//modal is an alert box where user can add input

hydroForm.addEventListener("change", function onSelect(e) {
  console.log(e);

  hydroPostData = {
    userID: user.id,
    date: getTodaysDate(),
    numOunces: parseInt(numOuncesInput.value)
  };
});

hydroDialog.addEventListener("close", function onClose() {
  console.log(hydroPostData);
  fetch("http://localhost:3001/api/v1/hydration", {
    method: "POST",
    body: JSON.stringify(hydroPostData),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      console.log(`Way to stay hydrated!`);
      //check for response is not 2**
      // error response in dom?
      fetchApiCalls(hydroPostData.userID);
      // chart.groupedBar().update()
    })
    .catch(err => {
      // write error handling here
      console.log(err);
    });
  // chart.groupedBar().desrtoy();
});

updateSleep.addEventListener("click", function onOpen() {
  sleepDialog.showModal();
});

sleepForm.addEventListener("change", function onSelect(e) {
  console.log(e);
  captureHrsSlept(e);
  captureQuality(e);
  sleepPostData = {
    userID: user.id,
    date: getTodaysDate(),
    hoursSlept: parseInt(todaysSleep),
    sleepQuality: parseInt(todaysQuality)
  };
});

sleepDialog.addEventListener("close", function onClose() {
  console.log(sleepPostData);
  fetch("http://localhost:3001/api/v1/sleep", {
    method: "POST",
    body: JSON.stringify(sleepPostData),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      console.log(`Great job getting some Zzzzs! 😴`);
      //check for response is not 2**
      // error response in dom?
      fetchApiCalls(sleepPostData.userID);
      // chart.groupedBar().update()
    })
    .catch(err => {
      // write error handling here
      console.log(err);
    });
  // chart.groupedBar().desrtoy();
});
