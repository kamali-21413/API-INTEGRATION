const apiKey = 'df49e0f8c8d6f4cd523d2ce215e431eb'; // Make sure to keep this secure
const getWeatherButton = document.getElementById('get-weather');

getWeatherButton.addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    if (city) {
        fetchWeather(city);
    } else {
        alert("Please enter a city name.");
    }
});

function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const cityName = data.name;
            const temp = data.main.temp;
            const weatherDescription = data.weather[0].description;

            document.getElementById('city-name').innerText = cityName;
            document.getElementById('temperature').innerText = `Temperature: ${temp} °C`;
            document.getElementById('description').innerText = `Description: ${weatherDescription}`;
        })
        .catch(error => {
            alert(error.message);
        });
}

