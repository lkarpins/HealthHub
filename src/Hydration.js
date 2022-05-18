class Hydration {
  constructor(hydrationData) {
    this.userID = hydrationData.userID;
    this.date = hydrationData.date;
    this.numOunces = hydrationData.numOunces;
    console.log(hydrationData);
  }
  returnAvgHydrationPerDay = userID => {
    //Identified by userID, should calculate average number
    //of ounces consumed per day for all time; filter? reduce?
  };

  returnDailyOunces = () => {
    //Identified by a specified date, return the ounces consumed for a given day; find?
  };

  returnWeeklyOunces = () => {
    //Identiified by a specific week, return the amount of ounces for each day;
  };
}

export default Hydration;
