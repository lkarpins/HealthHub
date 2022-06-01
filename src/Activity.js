class Activity {
  constructor(userID, activityAPIResponse){
    this.userID = userID;
    this.userActivityData = this.setUserActivityData(activityAPIResponse);
    this.date = this.userActivityData[0].date;
    this.numSteps = this.userActivityData[0].numSteps;
    this.minutesActive = this.userActivityData[0].minutesActive;
    this.flightsOfStairs = this.userActivityData[0].flightsOfStairs;
    this.activityAPIResponse = activityAPIResponse;
  }

  setUserActivityData = activityAPIResponse => {
    const userActive = activityAPIResponse.filter(userActiveData => {
     if (userActiveData.userID === this.userID) {
      return userActiveData;
     }
    });
    userActive.reverse();
    return userActive; 
   };
  


export default Activity;
