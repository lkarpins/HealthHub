// - For a user, their sleep quality for a specific day (identified by a date)
// - For a user, how many hours slept each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week
// - For a user, their sleep quality each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week
// - For all users, the average sleep quality

class Sleep {
  constructor(sleepData) {
    this.userID = sleepData.userID;
    this.date = sleepData.date;
    this.hoursSlept = sleepData.hoursSlept;
    this.sleepQuality = sleepData.sleepQuality;
  }

  avgSleepPerDay = () => {
    // For a user (identified by their `userID`), the average number of hours slept per day
    //
  };

  avgSleepQualityPerDay = () => {
    // - For a user, their average sleep quality per day over all time
  };

  sleptHoursPerDay = () => {
    // - For a user, how many hours they slept for a specific day (identified by a date)
  };
}

export default Sleep;
