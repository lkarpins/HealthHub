// `new User(userData);`
//
// - A `User` represents a single user
// - It should have a parameter to take in a `userData` object
// - Each user holds on to the user properties from the data file
// - Should have a method to:
//     - Return a user’s first name only

class User {
  constructor(userData) {
    (this.id = userData.id),
      (this.name = userData.name),
      (this.address = userData.address),
      (this.email = userData.email),
      (this.strideLength = userData.strideLength),
      (this.dailyStepGoal = userData.dailyStepGoal),
      (this.friends = userData.friends);
  }
}

export default User;
