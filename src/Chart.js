const chart = {
  horizontalBar: weeklyIntake => {
    return new Chart(document.getElementById("hydrationChart"), {
      type: "bar",
      data: {
        labels: weeklyIntake.date,
        datasets: [
          {
            label: "Ounces",
            backgroundColor: ["#E98A15"],
            data: weeklyIntake.numOunces
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: ""
        }
      }
    });
  },

  horizontalBar2: steps => {
    return new Chart(document.getElementById("activityStepsChart"), {
      type: "bar",
      data: {
        labels: steps.date,
        datasets: [
          {
            type: "bar",
            label: "Steps",
            backgroundColor: "#E98A15",
            data: steps.numSteps
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: ""
        }
      }
    });
  },

  groupedBar: (hours, quality) => {
    return new Chart(document.getElementById("sleepChart"), {
      data: {
        datasets: [
          {
            type: "line",
            label: "Quality (1-5)",
            borderColor: "#09441B",
            data: quality.sleepQuality
          },
          {
            type: "bar",
            label: "Hours",
            backgroundColor: "#E98A15",
            data: hours.hoursSlept
          }
        ],
        labels: hours.date
      },
      options: {
        title: {
          display: false,
          text: ""
        },
        responsive: true
      }
    });
  },

  groupedBar2: (minutes, flights) => {
    return new Chart(document.getElementById("activityChart"), {
      data: {
        datasets: [
          {
            type: "bar",
            label: "Flights of Stairs",
            backgroundColor: "#E98A15",
            data: flights.flightsOfStairs
          },
          {
            type: "bar",
            label: "Minutes Active",
            backgroundColor: "#09441B",
            data: minutes.minutesActive
          }
        ],
        labels: minutes.date
      },
      options: {
        title: {
          display: false,
          text: ""
        },
        responsive: true
      }
    });
  }
};

export default chart;
