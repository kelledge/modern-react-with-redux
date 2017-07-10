import axios from 'axios';

export const OPEN_WEATHER_MAP_API_KEY = '503f81f145f2111c38fec3e1358ee6eb'
const BASE_URL = "http://api.openweathermap.org/data/2.5/forecast?q="

export default class OpenWeatherMapApi {
  constructor(apiKey) {
    this.apiKey = apiKey
  }

  search(city, country = 'us') {
    const url = BASE_URL + city + "," + country + "&appid=" + this.apiKey;
    const req = axios.get(url);

    return req;
  }
}
