import "./styles.css";

let data;
let jsonwho;
let cityname = document.querySelector(".cityname");
let latitude = document.querySelector(".latitude");
let longitude = document.querySelector(".longitude");
let temp = document.querySelector(".currenttemp");
let currentcondition = document.querySelector(".currentcondition");
let description = document.querySelector(".description");
let feelslike = document.querySelector(".feelslike");
let humidity = document.querySelector(".humidity");
let form = document.querySelector("#form");
let input = document.querySelector(".city");

async function main(city) {
    try {
        data = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=3S9LVVWM63CDHRNGCVLEQUGUF&contentType=json`);
        jsonwho = await data.json();
        cityname.textContent = jsonwho.address;
        latitude.textContent = await jsonwho.latitude;
        longitude.textContent = await jsonwho.longitude;
        temp.textContent = "Current Temperature: " + jsonwho.currentConditions.temp + " F";
        feelslike.textContent = "Feels Like: " + jsonwho.currentConditions.feelslike + " F";
        currentcondition.textContent = jsonwho.currentConditions.conditions;
        description.textContent = jsonwho.description;
        humidity.textContent = "Humidity: " + jsonwho.currentConditions.humidity;
        console.log(jsonwho);
    }
    catch(error){
        console.log(error);
        return;
    }
}
main("London");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    main(input.value);
    form.reset();
})
