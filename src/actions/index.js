import Axios from 'axios';

const WEATHER_API_KEY='6e1f28ee7d8ae1c5e7aea1295b6d6abc';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?&appid=${WEATHER_API_KEY}`;

export const FETCH_WEATHER= 'FETCH_WEATHER';

export function fetchWeather(city) {
    
    const url = `${ROOT_URL}&q=${city},no`;
    const request = Axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}