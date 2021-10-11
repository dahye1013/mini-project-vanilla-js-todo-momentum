import { weatherApiKey } from "./apiKeys";
const API_KEY_WEATHER = weatherApiKey;

const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
weather.innerText = "loading...💭";
/**
 * [Current weather data API]
 * https://openweathermap.org/current
 * - By geographic coordinates (위도와 경도를 사용하는 API)
 */
/**
 * @param {*} position //콜백으로 사용가능한 obj
 */
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY_WEATHER}&units=metric`;
  //   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY_WEATHER}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
      city.innerText = data.name;
    });
}
function onGeoError() {
  alert("Can't find you, No weather for you.");
}
/**
 * [Geolocation API]
 * 웹 애플리케이션에 위치 정보를 제공할 수 있는 API
 * ref: https://developer.mozilla.org/ko/docs/Web/API/Geolocation_API
 */
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
