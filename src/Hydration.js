class Hydration {
  constructor(userHydroData, hydroAPIResponse) {
    this.userID = userHydroData.userID;
    this.date = userHydroData.date;
    this.numOunces = userHydroData.numOunces;
    this.hydroAPIResponse = hydroAPIResponse;
    this.userHydroData = this.setUserHydroData(hydroAPIResponse);
  }

  setUserHydroData = hydroAPIResponse => {
    const userHydro = hydroAPIResponse.filter(userHydroData => {
      if (userHydroData.userID === this.userID) {
        return userHydroData;
      }
    });
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
    let weeklyIntake = this.userHydroData.map(entry => {
      return entry.numOunces;
    });
    const targetStartDate = this.userHydroData.findIndex(entry => {
      return entry.date === weekStart;
    });
    let chosenWeek = weeklyIntake.slice(targetStartDate, targetStartDate + 7);
    return chosenWeek;
  };
}

export default Hydration;
