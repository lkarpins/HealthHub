// Your fetch requests will live here!
const fetchHydrationData = () => {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/hydration")
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log("Hydration API error!"));
};

const fetchSleepData = () => {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/sleep")
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log("Sleep API error!"));
};

const fetchUserData = () => {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/users")
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log("User API error!"));
};

const fetchData = () => {
  return Promise.all([fetchHydrationData(), fetchSleepData(), fetchUserData()]);
};

export default { fetchData };
