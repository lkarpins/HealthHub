class Hydration {
  constructor(hydrationData) {
    this.userID = hydrationData.userID;
    this.date = hydrationData.date;
    this.numOunces = hydrationData.numOunces;
  }

  avgHydrationPerDay = () => {
    //Identified by userID, should calculate average number of number
    //of ounces drank per day
  }
}

export default Hydration;
