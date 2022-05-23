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

  groupedBar: (hours, quality) => {
    return new Chart(document.getElementById("sleepChart"), {
      data: {
        datasets: [
          {
            type: "line",
            label: "Quality",
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
  }
};

export default chart;
