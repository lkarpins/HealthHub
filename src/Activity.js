// {
// userID: 1,
// date: "2019/06/15",
// numSteps: 3577,
// minutesActive: 140,
// flightsOfStairs: 16
// },
class Activity {
  constructor(userID, activityAPIResponse){
    this.userID = userID;
    this.userActivityData = this.setUserActivityData(hydroActivityResponse);
    this.date = this.userActivityData[0].date;
  }





export default Activity;
