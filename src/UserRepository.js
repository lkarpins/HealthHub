class UserRepository {
  constructor(data) {
    this.data = data 
  }
  // determineUserData = () => {
  //   //need to be able to find a user based on their ID
  //   // likely need an iterator method, but not sure which one
  //   // attempted loop to access the id at the right index positions
  //   // didn't work
  //   for (var = i; i < this.data; i++) {
  //     if (this.data[i].id === this.data[i].id) {
  //       return this.data[i]
  //     }
  //   }
  // }
  averageStepGoal = () => {
    const stepGoals = this.data.map((steps) => {
      return steps.dailyStepGoal
  })
  console.log(stepGoals)
  const stepGoalSum = stepGoals.reduce(
    (previousSteps, currentSteps) => {
      return previousSteps + currentSteps
    },0);
    return stepGoalSum / stepGoals.length
    // const averageStepGoal = stepGoals / stepGoals.length
    // return averageStepGoal
  // The average step goal amongst all users
  // need to go through user array
  // isolate step goal
  // possibly use filer
  // find out average
  }
}

export default UserRepository;