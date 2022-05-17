import { expect } from 'chai';
import User from "../src/User";
import UserRepository from '../src/UserRepository';

describe('User Repository', () => {
  let user;
  let user2;
  let userRepository;
  beforeEach(() => {
    user = new User({
      id: 2,
      name: "Jarvis Considine",
      address: "30086 Kathryn Port, Ciceroland NE 07273",
      email: "Dimitri.Bechtelar11@gmail.com",
      strideLength: 4.5,
      dailyStepGoal: 5000,
      friends: [
        9,
        18,
        24,
        19
      ]
    });
    
    user2 = new User({
      id: 5,
      name: "Erick Schaden",
      address: "514 Mayert Walk, Jordaneside SC 55023-6523",
      email: "Vanessa_Gerhold@gmail.com",
      strideLength: 3.1,
      dailyStepGoal: 8000,
      friends: [
        13,
        44,
        49,
        33,
        10
      ]
    })
    userRepository = new UserRepository([user, user2])    
    })
    it("should be a function", function () {
      expect(UserRepository).to.be.a('function');
    });
    it("should be an instance of UserRepository", () => {
      expect(userRepository).to.be.an.instanceof(UserRepository);
    });

    // it("should be able to determine user data by ID", () => {
    //   let determineUser = userRepository.determineUserData();
    //   expect(determineUser).to.equal(user)
    // });

    it("should be able to capture the average step goal of the users ", () => {
      let averageSteps = userRepository.averageStepGoal();
      expect(averageSteps).to.equal(6500)
    })
  
  });
  
