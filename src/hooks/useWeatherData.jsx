import { capitalize } from '../utils/helper';
import {API_URL, API_KEY, DEFAULT_LATITUTE, DEFAULT_LONGITUDE } from '../utils/constants';
import { convertToKmH, convertToKm,formatDate, roundDegree } from '../utils/convertUnits';


export const useWeatherData = async(searchInput) => {
    const url = searchInput ? `${API_URL}/weather?q=${searchInput}&appid=${API_KEY}&units=metric` : 
    `${API_URL}/weather?lat=${DEFAULT_LATITUTE}&lon=${DEFAULT_LONGITUDE}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const current_weather_info = {
            animated_img : data?.weather[0].icon,
            temperature: await roundDegree(data?.main.temp),
            description: await capitalize(data?.weather[0].description),
            location: data?.name,	
            date: await formatDate(data?.dt),
            wind_speed: await convertToKmH(data.wind.speed),
            pressure: `${data.main.pressure} hPa`,
            sunrise: await formatDate(data.sys.sunrise, "hour"),
            humidity: data.main.humidity,
            visibility: await convertToKm(data.visibility),
            sunset: await formatDate(data.sys.sunset, "hour")
        }

        return current_weather_info;
    } catch (error) {
        console.log(error)
    }
}