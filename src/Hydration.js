class Hydration {
  constructor(hydrationData) {
    this.userID = hydrationData.userID;
    this.date = hydrationData.date;
    this.numOunces = hydrationData.numOunces;
  };

  returnAvgHydrationPerDay = () => {
    //Identified by userID, should calculate average number
    //of ounces consumed per day for all time; reduce?
  };

  returnDailyOunces = () => {
    //Identified by a specified date, return the ounces consumed for a given day; reduce?
  };

  returnWeeklyOunces = () => {
    //Identiified by a specific week, return the amount of ounces for each day;
  }
};

export default Hydration;
