const navLinks = document.querySelectorAll(".nav-links a");


const temperatureReadings = [34, 36, 38, 39, 41, 40, 37, 35, 39, 42];

const heatwaveThreshold = 40;

// Find minimum and maximum temperature
const minimumTemperature = Math.min(...temperatureReadings);
const maximumTemperature = Math.max(...temperatureReadings);

// Calculate average temperature
const totalTemperature = temperatureReadings.reduce(function (total, reading) {
  return total + reading;
}, 0);

const averageTemperature = totalTemperature / temperatureReadings.length;

// Find readings above 40°C
const aboveThreshold = temperatureReadings.filter(function (reading) {
  return reading > heatwaveThreshold;
});

// Find readings equal to or above 40°C
const heatwaveReadings = temperatureReadings.filter(function (reading) {
  return reading >= heatwaveThreshold;
});

// Display results on the webpage
document.getElementById("all-readings").textContent =
  temperatureReadings.join("  ") + " °C";

document.getElementById("minimum").textContent =
  minimumTemperature + "°C";

document.getElementById("maximum").textContent =
  maximumTemperature + "°C";

document.getElementById("average").textContent =
  averageTemperature.toFixed(1) + "°C";

document.getElementById("above-threshold").textContent =
  aboveThreshold.length;

document.getElementById("at-or-above").textContent =
  heatwaveReadings.length;

document.getElementById("high-readings").textContent =
  heatwaveReadings.join(", ") + "°C";