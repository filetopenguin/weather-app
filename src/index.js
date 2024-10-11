//index.js
import { displayCard, updateTemperatureDisplay, convertToCelsius} from "./dom";
import './styles.css';
const apiKey = process.env.API_KEY;
console.log(apiKey);


const searchInput = document.querySelector("input[type=text]")
const myForm = document.getElementById('my-form');

myForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const city = searchInput.value;
    if (city) {
        try {
            const data = await fetchWeatherData(city); // Fetch weather data once
            console.log(data); // Log the data received
            displayCard(data.resolvedAddress, data.currentConditions.datetime, data.currentConditions.icon, data.currentConditions.temp);
        } catch (error) {
            console.error('Error:', error); // Log any errors
            displayCard("An error occured");
        }
    } else {
        console.log('No city entered');
        displayCard('No city entered');
    }
});

// Fetch weather data
async function fetchWeatherData(city) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json(); // Return the parsed JSON response
}
