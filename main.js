// the name of the day
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const week = new Date();
let day = days[week.getDay()];
document.getElementById("date-dayname").innerHTML = day;
// the date
const d = new Date();
document.getElementById( "date").innerHTML = d.toLocaleDateString();


// API key //
var APIKey = "96a76e81a5d9dd067bbf02bfb0127a67";

document.getElementById("selectCity").addEventListener("change", function () {
  //  fetch Api//
  city = document.querySelector("#selectCity").value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=96a76e81a5d9dd067bbf02bfb0127a67&units=metric`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);


      document.querySelector(".wind .value").textContent = data.wind.speed;
      document.querySelector(".humidity .value").textContent =
        data.main.humidity + "%";
      document.querySelector(".pressure .value").textContent =
        data.main.pressure + "%";
      document.querySelector(".weather-temp").textContent =
        data.main.temp.toFixed(0) + "°C";
      document.querySelector(".location").textContent = city;

      document.querySelector(".weather-desc").textContent =
        data.weather[0].main;
        
    });
});
