import OpenWeatherMapApi, { OPEN_WEATHER_MAP_API_KEY } from '../weather_api';

export const FETCH_WEATHER = 'FETCH_WEATHER';

const weatherApi = new OpenWeatherMapApi(OPEN_WEATHER_MAP_API_KEY);

export function fetchWeather(cityName) {
  return {
    type: FETCH_WEATHER,
    payload: weatherApi.search(cityName)
  }
}
