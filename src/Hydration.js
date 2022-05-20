class Hydration {
  constructor(userID, hydroAPIResponse) {
    this.userID = userID;
    this.userHydroData = this.setUserHydroData(hydroAPIResponse);
    this.date = this.userHydroData[0].date;
    this.numOunces = this.userHydroData[0].numOunces
    this.hydroAPIResponse = hydroAPIResponse;
  }

  setUserHydroData = hydroAPIResponse => {
    const userHydro = hydroAPIResponse.filter(userHydroData => {
      if (userHydroData.userID === this.userID) {
        return userHydroData;
      }
    });
    userHydro.reverse()
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
      const weeklyIntakeEntry = {
        date: entry.date,
        numOunces: entry.numOunces
      }
      return weeklyIntakeEntry
    });
    const targetStartDate = this.userHydroData.findIndex(entry => {
      return entry.date === weekStart;
    });
    let chosenWeek = weeklyIntake.slice(targetStartDate, targetStartDate + 7);
    chosenWeek.reverse();
    return chosenWeek;
  };
}

export default Hydration;
