// - For a user (identified by their `userID`), the average number of hours slept per day
// - For a user, their average sleep quality per day over all time
// - For a user, how many hours they slept for a specific day (identified by a date)
// - For a user, their sleep quality for a specific day (identified by a date)

// - For a user, how many hours slept each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week
// - For a user, their sleep quality each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week
// - For all users, the average sleep quality

// {
//   "userID": [number],
//   "date": [string YYYY/MM/DD],
//   "hoursSlept": [number - hours],
//   "sleepQuality": [number - unitless]
// },

class Sleep {
  constructor(sleepData) {
    this.userID = sleepData.userID;
  }
}

export default Sleep;
