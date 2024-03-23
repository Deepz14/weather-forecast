import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { add_dailyForecast } from "../store/weatherSlice";
import { formatDate, roundDegree } from '../utils/convertUnits';

export const useWeatherForeCast  = () => {
    const apiURL = import.meta.env.VITE_APP_WEATHER_API_URL;
    const apiKey = import.meta.env.VITE_APP_WEATHER_API_KEY;
    const lat = 11.35;
    const long = 77.7333;
    const nextFiveDay = [];
    const nextFiveDayData = [];
    const dispatch = useDispatch();

    const [weatherForeCast, setWeatherForeCast] = useState([]);
    const nextFiveDayDataHandler = async(weatherData) => {
        for (let i = 0; i < weatherData.length; i++) {
            nextFiveDayData.push({
                date: await formatDate(weatherData[i]?.dt, 'short'),
                time: await formatDate(weatherData[i]?.dt, 'hour'),
                icon: weatherData[i].weather[0].icon,
                temperature: await roundDegree(weatherData[i].main.temp),
                description: weatherData[i].weather[0].main
            })
        }
    }

    useEffect(() => {
        const fetchWeatherForeCast = async () => {
            const response = await fetch(apiURL + '/forecast?lat='+ lat + '&lon=' + long + '&' + 'appid='+ apiKey +'&units=metric')
            const data = await response.json()
            setWeatherForeCast(data.list);
            console.log("Forecast API response", data.list);
            await nextFiveDayDataHandler(data.list);
            console.log("Next Five Day Data", nextFiveDayData);
            dispatch(add_dailyForecast(nextFiveDayData));
        }
        fetchWeatherForeCast();
    }, [])

    return (weatherForeCast)
}