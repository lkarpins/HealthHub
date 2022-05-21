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
    let weeklyHoursSlept = this.userSleepData.map(entry => {
      const weeklyHourEntry = {
        date: entry.date,
        hoursSlept: entry.hoursSlept
      }
      return weeklyHourEntry;
    });
    const targetStartDate = this.userSleepData.findIndex(entry => {
      return entry.date === weekStart;
    });

    let chosenWeek = weeklyHoursSlept.slice(
      targetStartDate,
      targetStartDate + 7
    );
    chosenWeek.reverse();
    return chosenWeek;
  };

  sleepQualityPerDayPerWeek = weekStart => {
    let weeklySleepQuality = this.userSleepData.map(entry => {
      const weeklyQualityEntry = {
        date: entry.date,
        sleepQuality: entry.sleepQuality
      }
      return weeklyQualityEntry;
    });
    const targetStartDate = this.userSleepData.findIndex(entry => {
      return entry.date === weekStart;
    });

    let chosenWeek = weeklySleepQuality.slice(
      targetStartDate,
      targetStartDate + 7
    );
    chosenWeek.reverse();
    return chosenWeek;
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
}

export default Sleep;
