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

  returnWeeklyOunces = () => {
    //Identiified by a specific week, return the amount of ounces for each day;
  };
}

export default Hydration;
