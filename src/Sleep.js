class Sleep {
  constructor(userSleep, sleepAPIResponse) {
    this.userID = userSleep.userID;
    this.date = userSleep.date;
    this.hoursSlept = userSleep.hoursSlept;
    this.sleepQuality = userSleep.sleepQuality;
    this.sleepAPIResponse = sleepAPIResponse;
    this.userSleepData = this.setUserSleepData(sleepAPIResponse);
  }

  setUserSleepData = sleepAPIResponse => {
    const userSleep = sleepAPIResponse.filter(userSleepData => {
      if (userSleepData.userID === this.userID) {
        return userSleepData;
      }
    });
    return userSleep;
  };

  avgSleepPerDay = () => {
    // For a user (identified by their `userID`), the average number of hours slept per day
    //
    let totalHours = 0;
    this.userSleepData.forEach(entry => {
      return (totalHours += entry.hoursSlept);
    });

    const averageHours =
      Math.round(
        (totalHours / this.userSleepData.length + Number.EPSILON) * 10
      ) / 10;
    return averageHours;
  };

  avgSleepQualityPerDay = () => {
    // - For a user, their average sleep quality per day over all time
    let totalHours = 0;
    this.userSleepData.forEach(entry => {
      return (totalHours += entry.sleepQuality);
    });

    const averageHours =
      Math.round(
        (totalHours / this.userSleepData.length + Number.EPSILON) * 10
      ) / 10;
    return averageHours;
  };

  sleptHoursPerDay = () => {
    // - For a user, how many hours they slept for a specific day (identified by a date)
  };

  sleepQualityPerDay = () => {
    // - For a user, their sleep quality for a specific day (identified by a date)
  };

  sleptHoursPerDayPerWeek = () => {
    // - For a user, how many hours slept each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week
  };

  sleepQualityPerDayPerWeek = () => {
    // For a user, their sleep quality each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week
  };

  avgSleepQualityAllUsers = () => {
    // - For all users, the average sleep quality
  };
}

export default Sleep;
