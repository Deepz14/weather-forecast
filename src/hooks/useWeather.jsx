import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_dailyForecast, add_hourly_weather_info, add_next_five_day_tab, add_weatherInfo } from "../store/weatherSlice";
import { useWeatherData } from "./useWeatherData";

export const useWeather = () => {
    const [location, setLocation] = useState({});
    const {current_location} = useSelector((state) => state.weather);
    const dispatch = useDispatch();
    console.log("Hook current Location", current_location);
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                setLocation({
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                });
                 
                // useWeatherData(current_location);
                // // Fetch weather data for the current location.
                // const {current_weather_info} = useCurrentWeather(location.latitude, location.longitude);
                // // Fetch weather data for the next 5 days.
                // const { hourlyWeatherData, tabNextDays, nextFiveDayData } = useDailyForecast(location.latitude, location.longitude);
              
                // dispatch(add_weatherInfo(current_weather_info));
                // dispatch(add_hourly_weather_info(hourlyWeatherData));
                // dispatch(add_next_five_day_tab(tabNextDays));
                // dispatch(add_dailyForecast(nextFiveDayData));
            },
              (error) => {
                console.log("Unable to retrieve your location. Using default location.");
                setLocation({
                  latitude: DEFAULT_LATITUTE, // Default latitude (Erode City)
                  longitude: DEFAULT_LONGITUDE, // Default longitude (Erode City)
                });
                
                // // Fetch weather data for the current location.
                // const {current_weather_info} = useCurrentWeather(location.latitude, location.longitude);
                // // Fetch weather data for the next 5 days.
                // const { hourlyWeatherData, tabNextDays, nextFiveDayData } = useDailyForecast(location.latitude, location.longitude);

                // dispatch(add_weatherInfo(current_weather_info));
                // dispatch(add_hourly_weather_info(hourlyWeatherData));
                // dispatch(add_next_five_day_tab(tabNextDays));
                // dispatch(add_dailyForecast(nextFiveDayData));
              }
            );
          }else{
            alert('Geolocation is not supported by this browser.');
            // Fetch weather data for the current location.
            // const {current_weather_info} = useCurrentWeather(location.latitude, location.longitude);
            // // Fetch weather data for the next 5 days.
            // const { hourlyWeatherData, tabNextDays, nextFiveDayData } = useDailyForecast(location.latitude, location.longitude);

            // dispatch(add_weatherInfo(current_weather_info));
            // dispatch(add_hourly_weather_info(hourlyWeatherData));
            // dispatch(add_next_five_day_tab(tabNextDays));
            // dispatch(add_dailyForecast(nextFiveDayData));
        }
    }, []);

}

export default useWeather;