// document.addEventListener('DOMContentLoaded', function () {
//   // Get the current position of the user
//   navigator.geolocation.getCurrentPosition(position => {
//       const { latitude, longitude } = position.coords;

//       // Use OpenWeatherMap API to fetch weather data
//       const apiKey = '03285ead66dad8101e90f1fc799afc83';
//       const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

//       fetch(apiUrl)
//           .then(response => response.json())
//           .then(data => {
//               const weatherInfo = document.getElementById('weather-info');

//               // Check if 'main' and 'weather' properties exist
//               if (data.main && data.weather && data.weather.length > 0) {
//                   const temperature = Math.round(data.main.temp - 273.15); // Convert from Kelvin to Celsius
//                   const description = data.weather[0].description;

//                   weatherInfo.textContent = `Current Temperature: ${temperature}°C, ${description}`;
//               } else {
//                   console.error('Invalid data format: Missing "main" or "weather" properties.');
//                   weatherInfo.textContent = 'Error fetching weather data.';
//               }
//           })
//           .catch(error => {
//               console.error('Error fetching weather data:', error);
//               const weatherInfo = document.getElementById('weather-info');
//               weatherInfo.textContent = 'Error fetching weather data.';
//           });
//   });
// });
// document.addEventListener('DOMContentLoaded', function () {
//   // Get the current position of the user
//   navigator.geolocation.getCurrentPosition(position => {
//       const { latitude, longitude } = position.coords;

//       // Use OpenWeatherMap API to fetch weather data
//       const apiKey = '03285ead66dad8101e90f1fc799afc83';
//       const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

//       fetch(apiUrl)
//           .then(response => response.json())
//           .then(data => {
//               const weatherInfo = document.getElementById('weather-info');

//               // Check if 'main' and 'weather' properties exist
//               if (data.main && data.weather && data.weather.length > 0) {
//                   const temperature = Math.round(data.main.temp - 273.15); // Convert from Kelvin to Celsius
//                   const description = data.weather[0].description;
//                   const locationName = data.name;
//                   const country = data.sys.country;

//                   weatherInfo.textContent = `Location: ${locationName}, ${country}\nCurrent Temperature: ${temperature}°C, ${description}`;
//               } else {
//                   console.error('Invalid data format: Missing "main" or "weather" properties.');
//                   weatherInfo.textContent = 'Error fetching weather data.';
//               }
//           })
//           .catch(error => {
//               console.error('Error fetching weather data:', error);
//               const weatherInfo = document.getElementById('weather-info');
//               weatherInfo.textContent = 'Error fetching weather data.';
//           });
//   });
// });
document.addEventListener('DOMContentLoaded', function () {
  // Get the current position of the user
  if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
          position => {
              const { latitude, longitude } = position.coords;

              // Use OpenWeatherMap API to fetch weather data
              const apiKey = '03285ead66dad8101e90f1fc799afc83';
              const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

              fetch(apiUrl)
                  .then(response => response.json())
                  .then(data => {
                      const weatherInfo = document.getElementById('weather-info');

                      // Check if 'main' and 'weather' properties exist
                      if (data.main && data.weather && data.weather.length > 0) {
                          const temperature = Math.round(data.main.temp - 273.15); // Convert from Kelvin to Celsius
                          const description = data.weather[0].description;
                          const locationName = data.name;
                          const country = data.sys.country;

                          weatherInfo.textContent = `Location: ${locationName}, ${country}\nCurrent Temperature: ${temperature}°C, ${description}`;
                      } else {
                          console.error('Invalid data format: Missing "main" or "weather" properties.');
                          weatherInfo.textContent = 'Error fetching weather data.';
                      }
                  })
                  .catch(error => {
                      console.error('Error fetching weather data:', error);
                      const weatherInfo = document.getElementById('weather-info');
                      weatherInfo.textContent = 'Error fetching weather data.';
                  });
          },
          error => {
              console.error('Error getting user location:', error);
              const weatherInfo = document.getElementById('weather-info');
              weatherInfo.textContent = 'Error getting user location.';
          }
      );
  } else {
      console.error('Geolocation is not supported by your browser');
      const weatherInfo = document.getElementById('weather-info');
      weatherInfo.textContent = 'Geolocation is not supported by your browser.';
  }
});

