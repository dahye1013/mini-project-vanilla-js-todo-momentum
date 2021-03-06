import { weatherApiKey } from "./apiKeys";
const API_KEY_WEATHER = weatherApiKey;

const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
weather.innerText = "loading...π­";
/**
 * [Current weather data API]
 * https://openweathermap.org/current
 * - By geographic coordinates (μλμ κ²½λλ₯Ό μ¬μ©νλ API)
 */
/**
 * @param {*} position //μ½λ°±μΌλ‘ μ¬μ©κ°λ₯ν obj
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
 * μΉ μ νλ¦¬μΌμ΄μμ μμΉ μ λ³΄λ₯Ό μ κ³΅ν  μ μλ API
 * ref: https://developer.mozilla.org/ko/docs/Web/API/Geolocation_API
 */
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
