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

  returnDailyMilesWalked = (date, user) => {
    let dailyMiles = this.userActivityData.find(entry => {
      return entry.date === date;
    });
    return Math.round( 
      ((dailyMiles.numSteps / (5280 / user.strideLength)) + Number.EPSILON) * 10 
    ) / 10
  };

  returnMinutesActivePerDay =  date => {
    let dailyMins = this.userActivityData.find(entry => {
      return entry.date === date;
    });
    return dailyMins.minutesActive;
  };

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

  returnStatusOfDailyStepGoal = (date, user) => {
    let dailyStatus = this.userActivityData.find(entry => {
      return entry.date === date;
    });
    return dailyStatus.numSteps >= user.dailyStepGoal
  };

  returnDaysStepGoalExceeded = user => {
    const allTimeStatus = this.userActivityData.reduce((acc, entry) => {
     if (this.returnStatusOfDailyStepGoal(entry.date, user)) {
      acc.push(entry.date);
     }
     return acc;
    }, []);
    return allTimeStatus
   };
  // -For a user, find their all-time stair climbing record
  returnAllTimeStairClimbRecord = () => {
    let mostStairsClimbed = this.userActivityData.sort((a, b) => {
      return b.flightsOfStairs - a.flightsOfStairs
    });
    return mostStairsClimbed[0].flightsOfStairs 
  };

  // -For all users, what is the average number of:
  // stairs climbed for a specified date
  // steps taken for a specific date
  // minutes active for a specific date
  returnAvgActivityDataAllUsers = date => {
    const filteredActivity = this.activityAPIResponse.filter(
      entry => entry.date === date
    );
    const avgActivityDataAllUsers = filteredActivity.reduce(
      (acc, entry) => {
        acc.avgFlightsAllUsers +=
          entry.flightsOfStairs / filteredActivity.length;
        acc.avgFlightsAllUsers =
          Math.round((acc.avgFlightsAllUsers + Number.EPSILON) * 10) / 10;
        acc.avgStepsAllUsers += entry.numSteps / filteredActivity.length;
        acc.avgStepsAllUsers =
          Math.round((acc.avgStepsAllUsers + Number.EPSILON) * 10) / 10;
        acc.avgMinsActiveAllUsers +=
          entry.minutesActive / filteredActivity.length;
        acc.avgMinsActiveAllUsers =
          Math.round((acc.avgMinsActiveAllUsers + Number.EPSILON) * 10) / 10;
        return acc;
      },
      {
        avgFlightsAllUsers: 0,
        avgStepsAllUsers: 0,
        avgMinsActiveAllUsers: 0
      }
    );
    console.log(avgActivityDataAllUsers);
    return avgActivityDataAllUsers;
    };
};
// need to get average of user minutes active for a specific date

export default Activity;
