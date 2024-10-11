//dom.js
import clear_day from './assets/clear-day.png';
import partly_cloudy_day from './assets/partly-cloudy-day.png';
import partly_cloudy_night from './assets/partly-cloudy-night.png';
import cloudy from './assets/cloudy.png';

function displayCard(address,date,icon,temp){
    const cardDiv = document.getElementById('card');

    cardDiv.innerHTML='';

    const addressTitle = document.createElement("h1");
    const tempTitle = document.createElement("h2");
    const iconTitle = document.createElement("img");
    const dateTitle = document.createElement("p");

    addressTitle.innerText = address;
    tempTitle.innerText = temp + " Farenheit"  ;
    icon.replace(/-/g, "_");
    iconTitle.src = `assets/${icon}.png`;
    dateTitle.textContent = date;

    cardDiv.appendChild(addressTitle);
    cardDiv.appendChild(tempTitle);
    cardDiv.appendChild(iconTitle);
    cardDiv.appendChild(dateTitle);


}



export{displayCard}