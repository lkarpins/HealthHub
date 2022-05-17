class UserRepository {
  constructor(data) {
    this.data = data 
  }
  findUser = (idNum) => {
    const chosenUser = this.data.find((user) => {
      return user.id === idNum
    })
    return chosenUser
  }
  averageStepGoal = () => {
    const stepGoals = this.data.map((steps) => {
      return steps.dailyStepGoal
  })
    const stepGoalSum = stepGoals.reduce(
     (previousSteps, currentSteps) => {
       return previousSteps + currentSteps
     },0);
    return stepGoalSum / stepGoals.length
  }
}

export default UserRepository;