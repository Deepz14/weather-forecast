import { formatDate, roundDegree } from './convertUnits';

export const capitalize = async(string) => {
    const splitString = string.split(' ');
    return splitString.map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
};

export const hourlyWeatherDataHandler = async(weatherData) => {
    const hourlyWeatherData = [];
    for (let i = 0; i < 5; i++) {
        hourlyWeatherData.push({
            day: await formatDate(weatherData[i]?.dt, 'day'),
            time: await formatDate(weatherData[i]?.dt, 'hour'),
            temperature: await roundDegree(weatherData[i].main.temp),
        })
    }

    return hourlyWeatherData;
}
export const nextFiveDayDataHandler = async(weatherData) => {
    const tabNextDays = new Set(['All Days']);
    const nextFiveDayData = [];
    for (let i = 0; i < weatherData.length; i++) {
        tabNextDays.add(await formatDate(weatherData[i]?.dt, 'short'));
        nextFiveDayData.push({
            date: await formatDate(weatherData[i]?.dt, 'short'),
            time: await formatDate(weatherData[i]?.dt, 'hour'),
            icon: weatherData[i].weather[0].icon,
            temperature: await roundDegree(weatherData[i].main.temp),
            description: weatherData[i].weather[0].main
        })
    }

    return {
        tabNextDays: Array.from(tabNextDays),
        nextFiveDayData
    }
}