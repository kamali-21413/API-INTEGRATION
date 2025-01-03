const form = document.getElementById('weather-form');
const resultDiv = document.getElementById('weather-result');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const city = document.getElementById('city').value;
  const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeather API key
  const apiUrl = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('City not found');

    const data = await response.json();
    const { name, main, weather } = data;

    resultDiv.innerHTML = `
      <h2>${name}</h2>
      <p>Temperature: ${main.temp}°C</p>
      <p>Condition: ${weather[0].description}</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = <p style="color: red;">Error: ${error.message}</p>;
  }
});