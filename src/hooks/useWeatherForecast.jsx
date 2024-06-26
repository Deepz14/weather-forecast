import { API_URL, API_KEY} from '../utils/constants';
import { formatDate, roundDegree } from '../utils/convertUnits';

export const useWeatherForeCast = async(searchInput, typeSearch, unitType) => {
    const hourlyWeatherData = [];
    const tabNextDays = new Set(['All Days']);
    const nextFiveDayData = [];

    const url = typeSearch === 'queryName' ? `${API_URL}/forecast?q=${searchInput}&appid=${API_KEY}&units=${unitType}` : 
    `${API_URL}/forecast?lat=${searchInput[0]}&lon=${searchInput[1]}&appid=${API_KEY}&units=${unitType}`;

    // Handler for current day hourly weather data
    const hourlyWeatherDataHandler = async(weatherData) => {
        for (let i = 0; i < 5; i++) {
            hourlyWeatherData.push({
                day: await formatDate(weatherData[i]?.dt, 'day'),
                time: await formatDate(weatherData[i]?.dt, 'hour'),
                temperature: await roundDegree(weatherData[i].main.temp, unitType),
            })
        }
    }

    // Handler for the next five day tab & and hourly weather data
    const nextFiveDayDataHandler = async(weatherData) => {
        for (let i = 0; i < weatherData.length; i++) {
            tabNextDays.add(await formatDate(weatherData[i]?.dt, 'short'));
            nextFiveDayData.push({
                date: await formatDate(weatherData[i]?.dt, 'short'),
                time: await formatDate(weatherData[i]?.dt, 'hour'),
                icon: weatherData[i].weather[0].icon,
                temperature: await roundDegree(weatherData[i].main.temp, unitType),
                description: weatherData[i].weather[0].main
            })
        }
    }

    try{
        const response = await fetch(url);
        const data = await response.json();
    
        await hourlyWeatherDataHandler(data.list);
        await nextFiveDayDataHandler(data.list);

        return {hourlyWeatherData, tabNextDays, nextFiveDayData};
    }catch(error){
        console.log(error)
    }
}