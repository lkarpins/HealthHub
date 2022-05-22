class Hydration {
  constructor(userID, hydroAPIResponse) {
    this.userID = userID;
    this.userHydroData = this.setUserHydroData(hydroAPIResponse);
    this.date = this.userHydroData[0].date;
    this.numOunces = this.userHydroData[0].numOunces;
    this.hydroAPIResponse = hydroAPIResponse;
  }

  setUserHydroData = hydroAPIResponse => {
    const userHydro = hydroAPIResponse.filter(userHydroData => {
      if (userHydroData.userID === this.userID) {
        return userHydroData;
      }
    });
    userHydro.reverse();
    return userHydro;
  };

  returnAvgHydroPerDay = () => {
    let totalOunces = 0;

    this.userHydroData.forEach(entry => {
      return (totalOunces += entry.numOunces);
    });
    const averageOunces =
      Math.round(
        (totalOunces / this.userHydroData.length + Number.EPSILON) * 10
      ) / 10;

    return averageOunces;
  };

  returnDailyOunces = date => {
    let dailyIntake = this.userHydroData.find(entry => {
      return entry.date === date;
    });
    return dailyIntake.numOunces;
  };

  returnWeeklyOunces = weekStart => {
    const targetStartDate = this.userHydroData.findIndex(entry => {
      return entry.date === weekStart;
    });

    const selectedWeekData = this.userHydroData
      .slice(targetStartDate, targetStartDate + 7)
      .reverse();

    let weeklyIntake = {
      date: [],
      numOunces: []
    };

    weeklyIntake.date = selectedWeekData.map(entry => entry.date);
    weeklyIntake.numOunces = selectedWeekData.map(entry => entry.numOunces);

    return weeklyIntake;
  };
}

export default Hydration;
