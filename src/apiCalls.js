// Your fetch requests will live here!

const fetchApiData = type => {
  return fetch(`https://fitlit-api.herokuapp.com/api/v1/${type}`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(`${type} API error!`));
};

const fetchData = () => {
  return Promise.all([
    fetchApiData("hydration"),
    fetchApiData("sleep"),
    fetchApiData("users")
  ]);
};

export default { fetchData };
