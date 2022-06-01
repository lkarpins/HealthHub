class Activity {
  constructor(userID, activityAPIResponse) {
    this.userID = userID;
    this.userActivityData = this.setUserActivityData(activityAPIResponse);
    this.date = this.userActivityData[0].date;
    this.numSteps = this.userActivityData[0].numSteps;
    this.minutesActive = this.userActivityData[0].minutesActive;
    this.flightsOfStairs = this.userActivityData[0].flightsOfStairs;
    this.activityAPIResponse = activityAPIResponse;
  }

  setUserActivityData = activityAPIResponse => {
    const userActive = activityAPIResponse.filter(userActivityData => {
     if (userActivityData.userID === this.userID) {
      return userActivityData;
     }
    });
    userActive.reverse();
    return userActive; 
  };

  // -For a specific day (specified by a date), return the miles a user has walked based on their number of steps (use their strideLength to help calculate this)
  returnDailyMilesWalked = (date, user) => {
    let dailyMiles = this.userActivityData.find(entry => {
      return entry.date === date;
    });
    return Math.round( 
      ((dailyMiles.numSteps / (5280 / user.strideLength)) + Number.EPSILON) * 10 
    ) / 10
  };
  

  // -For a user, (identified by their userID) how many minutes were they active for a given day (specified by a date)?
  returnMinutesActivePerDay =  date => {
    let dailyMins = this.userActivityData.find(entry => {
      return entry.date === date;
    });
    return dailyMins.minutesActive;
  };

  // -For a user, how many minutes active did they average for a given week (7 days)?
  returnAvgMinutesActivePerWeek = weekStart => {
    const targetStartDate = this.userActivityData.findIndex(entry => {
       return entry.date === weekStart;
     });
     let chosenWeek = this.userActivityData
       .slice(targetStartDate, targetStartDate + 7)
       .reverse()
     let weeklyMinutesActive = {
       date: [],
       minutesActive: []
     };
      weeklyMinutesActive.date = chosenWeek.map(entry => entry.date);
      weeklyMinutesActive.minutesActive = chosenWeek.map(entry => entry.minutesActive);
      const totalWeeklyMinutesActive = weeklyMinutesActive.minutesActive.reduce((acc, mins) => {
        return acc += mins 
      }, 0)
     const averageWeeklyActiveMinutes = 
       Math.round(
         (totalWeeklyMinutesActive / weeklyMinutesActive.minutesActive.length + Number.EPSILON) * 10
       ) / 10
      return averageWeeklyActiveMinutes;
  };

  // returnAvgHydroPerDay = () => {
  //   let totalOunces = 0;

  //   this.userHydroData.forEach(entry => {
  //     return (totalOunces += entry.numOunces);
  //   });
  //   const averageOunces =
  //     Math.round(
  //       (totalOunces / this.userHydroData.length + Number.EPSILON) * 10
  //     ) / 10;

  //   return averageOunces;
  // };


  // calculateSleptHoursPerDayPerWeek = weekStart => {
  //   const targetStartDate = this.userSleepData.findIndex(entry => {
  //     return entry.date === weekStart;
  //   });

  //   let chosenWeek = this.userSleepData
  //     .slice(targetStartDate, targetStartDate + 7)
  //     .reverse();

  //   let weeklyHours = {
  //     date: [],
  //     hoursSlept: []
  //   };

  //   weeklyHours.date = chosenWeek.map(entry => entry.date);
  //   weeklyHours.hoursSlept = chosenWeek.map(entry => entry.hoursSlept);

  //   return weeklyHours;
  // };

  // -For a user, did they reach their step goal for a given day (specified by a date)?

  returnStatusOfDailyStepGoal = date => {
    let dailyStatus = this.userActivityData.find(entry => {
      return entry.date === date;
    });
    if (this.numSteps >= user.dailyStepGoal) {
      return true;
    }
    return dailyStatus;
  };

  // -For a user, find all the days where they exceeded their step goal
  returnDaysStepGoalExceeded = () => {};

  // -For a user, find their all-time stair climbing record
  returnAllTimeStairClimbRecord = () => {};

  // -For all users, what is the average number of:
  // stairs climbed for a specified date
  // steps taken for a specific date
  // minutes active for a specific date
  returnAvgActivityDataAllUsers = date => {};
}


export default Activity;
