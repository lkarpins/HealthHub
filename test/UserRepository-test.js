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
      id: 3,
      name: "Herminia Witting",
      address: "85823 Bosco Fork, East Oscarstad MI 85126-5660",
      email: "Elwin.Tromp@yahoo.com",
      strideLength: 4.4,
      dailyStepGoal: 5000,
      friends: [
        19,
        11,
        42,
        33
      ]
    })
    userRepository = new UserRepository(user, user2)    
    })
    it('should be a function', function () {
      expect(UserRepository).to.be.a('function');
    });
    it("should be an instance of UserRepository", () => {
      expect(userRepository).to.be.an.instanceof(UserRepository);
    });
  
  })
  
