import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { add_weatherInfo } from '../store/weatherSlice';
import { capitalize, convertToKmH, convertToKm,formatDate, roundDegree } from '../utils/convertUnits';

export const useWeatherData = () => {
    const apiURL = import.meta.env.VITE_APP_WEATHER_API_URL;
    const apiKey = import.meta.env.VITE_APP_WEATHER_API_KEY;
    const lat = 11.35;
    const long = 77.7333;
    const dispatch = useDispatch();
    const [weatherData, setWeatherData] = useState(null);
    
    const getWeatherData = async () => {
        try {
            const response = await fetch(apiURL + '/weather?lat='+ lat + '&lon=' + long + '&' + 'appid='+ apiKey +'&units=metric')
            const data = await response.json()
            setWeatherData(data);
            console.log("API response", data);
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
            console.log("Current weather info", current_weather_info);
            dispatch(add_weatherInfo(current_weather_info));
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getWeatherData()
    }, [])

    return { weatherData }
}