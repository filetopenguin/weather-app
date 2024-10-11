import clear_day from './assets/clear-day.png';
import partly_cloudy_day from './assets/partly-cloudy-day.png';
import partly_cloudy_night from './assets/partly-cloudy-night.png';
import cloudy from './assets/cloudy.png';
import clear_night from './assets/clear-night.png'
import rain from './assets/rain.png'


const iconMap = {
    "clear-day": clear_day,
    "partly-cloudy-day": partly_cloudy_day,
    "partly-cloudy-night": partly_cloudy_night,
    "cloudy": cloudy,
    "clear-night": clear_night,
    "rain": rain
};

function displayCard(address, date, icon, temp) {
    const cardDiv = document.getElementById('card');
    cardDiv.innerHTML = '';

    const addressTitle = document.createElement("h1");
    const tempTitle = document.createElement("h2");
    const iconTitle = document.createElement("img");
    const dateTitle = document.createElement("p");

    addressTitle.innerText = address;

    // Initialize the temperature display
    updateTemperatureDisplay(temp, tempTitle);

    iconTitle.src = iconMap[icon] || '';
    iconTitle.alt = icon;
    dateTitle.textContent = "The time is " + (date || '');

    cardDiv.appendChild(addressTitle);
    cardDiv.appendChild(tempTitle);
    cardDiv.appendChild(iconTitle);
    cardDiv.appendChild(dateTitle);
}
 function updateTemperatureDisplay(temp, tempTitle) {
    const tempToggle = document.getElementById('temp-toggle');
    const tempC = convertToCelsius(temp);

    // Initialize the display based on the toggle state
    tempTitle.innerText = tempToggle.checked ? `${tempC.toFixed(1)} °C` : `${temp.toFixed(1)} °F`;

    // Update the display on toggle change
    tempToggle.addEventListener('change', () => {
        tempTitle.innerText = tempToggle.checked ? `${tempC.toFixed(1)} °C` : `${temp.toFixed(1)} °F`;
    });
}

function convertToCelsius(tempF) {
    return ((tempF - 32) * 5) / 9;
}

export { displayCard , updateTemperatureDisplay, convertToCelsius};