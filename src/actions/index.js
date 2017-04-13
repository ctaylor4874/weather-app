import axios from 'axios';

const sourceFile = require('../../config');
const API_KEY = '32c8268ee9b51a9eff6bacff456ddd18';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// always use constants for action type
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    // Redux promise manages http request and waits for promise to be resolved to send the action off
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}