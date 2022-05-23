class Sleep {
  constructor(userID, sleepAPIResponse) {
    this.userID = userID;
    this.userSleepData = this.setUserSleepData(sleepAPIResponse);
    this.date = this.userSleepData[0].date;
    this.hoursSlept = this.userSleepData[0].hoursSlept;
    this.sleepQuality = this.userSleepData[0].sleepQuality;
    this.sleepAPIResponse = sleepAPIResponse;
  }

  setUserSleepData = sleepAPIResponse => {
    const userSleep = sleepAPIResponse.filter(userSleepData => {
      if (userSleepData.userID === this.userID) {
        return userSleepData;
      }
    });
    userSleep.reverse();
    return userSleep;
  };

  avgSleepPerDay = () => {
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
    let totalQuality = 0;
    this.userSleepData.forEach(entry => {
      return (totalQuality += entry.sleepQuality);
    });

    const averageQuality =
      Math.round(
        (totalQuality / this.userSleepData.length + Number.EPSILON) * 10
      ) / 10;
    return averageQuality;
  };

  sleptHoursPerDay = date => {
    let dailyHoursSlept = this.userSleepData.find(entry => {
      return entry.date === date;
    });

    return dailyHoursSlept.hoursSlept;
  };

  sleepQualityPerDay = date => {
    let dailySleepQuality = this.userSleepData.find(entry => {
      return entry.date === date;
    });

    return dailySleepQuality.sleepQuality;
  };

  sleptHoursPerDayPerWeek = weekStart => {
    const targetStartDate = this.userSleepData.findIndex(entry => {
      return entry.date === weekStart;
    });

    let chosenWeek = this.userSleepData
      .slice(targetStartDate, targetStartDate + 7)
      .reverse();

    let weeklyHours = {
      date: [],
      hoursSlept: []
    };

    weeklyHours.date = chosenWeek.map(entry => entry.date);
    weeklyHours.hoursSlept = chosenWeek.map(entry => entry.hoursSlept);
    console.log(weeklyHours, 'line 79')
    return weeklyHours;
  };

  sleepQualityPerDayPerWeek = weekStart => {
    const targetStartDate = this.userSleepData.findIndex(entry => {
      return entry.date === weekStart;
    });

    let chosenWeek = this.userSleepData
      .slice(targetStartDate, targetStartDate + 7)
      .reverse();

    let weeklyQuality = {
      date: [],
      sleepQuality: []
    };

    weeklyQuality.date = chosenWeek.map(entry => entry.date);
    weeklyQuality.sleepQuality = chosenWeek.map(entry => entry.sleepQuality);

    return weeklyQuality;
  };

  avgSleepQualityAllUsers = () => {
    let totalQuality = 0;
    this.sleepAPIResponse.forEach(entry => {
      return (totalQuality += entry.sleepQuality);
    });

    const averageQuality =
      Math.round(
        (totalQuality / this.sleepAPIResponse.length + Number.EPSILON) * 10
      ) / 10;
    return averageQuality;
  };
  avgHoursSleptAllUsers = () => {
    let totalHours = 0;
    this.sleepAPIResponse.forEach(entry => {
      return (totalHours += entry.hoursSlept);
    });

    const averageHoursSlept =
      Math.round(
        (totalHours / this.sleepAPIResponse.length + Number.EPSILON) * 10
      ) / 10;
    return averageHoursSlept;
  };
}

export default Sleep;
