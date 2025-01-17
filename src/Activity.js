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

  returnDailyMilesWalked = user => {
    let dailyMiles = this.userActivityData.find(entry => {
      return entry.date === this.date;
    });
    return (
      Math.round(
        (dailyMiles.numSteps / (5280 / user.strideLength) + Number.EPSILON) * 10
      ) / 10
    );
  };

  returnMinutesActivePerDay = date => {
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
      .reverse();
    let weeklyMinutesActive = {
      date: [],
      minutesActive: []
    };
    weeklyMinutesActive.date = chosenWeek.map(entry => entry.date);
    weeklyMinutesActive.minutesActive = chosenWeek.map(
      entry => entry.minutesActive
    );
    const totalWeeklyMinutesActive = weeklyMinutesActive.minutesActive.reduce(
      (acc, mins) => {
        return (acc += mins);
      },
      0
    );
    const averageWeeklyActiveMinutes =
      Math.round(
        (totalWeeklyMinutesActive / weeklyMinutesActive.minutesActive.length +
          Number.EPSILON) *
          10
      ) / 10;
    return averageWeeklyActiveMinutes;
  };

  returnStatusOfDailyStepGoal = (date, user) => {
    let dailyStatus = this.userActivityData.find(entry => {
      return entry.date === date;
    });
    return dailyStatus.numSteps >= user.dailyStepGoal;
  };

  returnDaysStepGoalExceeded = user => {
    const allTimeStatus = this.userActivityData.reduce((acc, entry) => {
      if (this.returnStatusOfDailyStepGoal(entry.date, user)) {
        acc.push(entry.date);
      }
      return acc;
    }, []);
    return allTimeStatus;
  };

  returnAllTimeStairClimbRecord = () => {
    let mostStairsClimbed = this.userActivityData.sort((a, b) => {
      return b.flightsOfStairs - a.flightsOfStairs;
    });
    return mostStairsClimbed[0].flightsOfStairs;
  };

  returnNumStepsPerDayPerWeek = weekStart => {
    const targetStartDate = this.userActivityData.findIndex(entry => {
      return entry.date === weekStart;
    });

    let chosenWeek = this.userActivityData
      .slice(targetStartDate, targetStartDate + 7)
      .reverse();

    let weeklySteps = {
      date: [],
      numSteps: []
    };

    weeklySteps.date = chosenWeek.map(entry => entry.date);
    weeklySteps.numSteps = chosenWeek.map(entry => entry.numSteps);
    return weeklySteps;
  };

  returnActiveMinsPerDayPerWeek = weekStart => {
    const targetStartDate = this.userActivityData.findIndex(entry => {
      return entry.date === weekStart;
    });

    let chosenWeek = this.userActivityData
      .slice(targetStartDate, targetStartDate + 7)
      .reverse();

    let weeklyActiveMins = {
      date: [],
      minutesActive: []
    };

    weeklyActiveMins.date = chosenWeek.map(entry => entry.date);
    weeklyActiveMins.minutesActive = chosenWeek.map(
      entry => entry.minutesActive
    );

    return weeklyActiveMins;
  };

  returnFlightsOfStairsClimbedPerDayPerWeek = weekStart => {
    const targetStartDate = this.userActivityData.findIndex(entry => {
      return entry.date === weekStart;
    });

    let chosenWeek = this.userActivityData
      .slice(targetStartDate, targetStartDate + 7)
      .reverse();

    let weeklyFlightsOfStairsClimbed = {
      date: [],
      flightsOfStairs: []
    };

    weeklyFlightsOfStairsClimbed.date = chosenWeek.map(entry => entry.date);
    weeklyFlightsOfStairsClimbed.flightsOfStairs = chosenWeek.map(
      entry => entry.flightsOfStairs
    );

    return weeklyFlightsOfStairsClimbed;
  };

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
    return avgActivityDataAllUsers;
  };
}

export default Activity;
