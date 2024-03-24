import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const WeatherForeCast = () => {

    const [curr_tab, setCurr_tab]  = useState('All Days');
    const [dailyHourForecast, setDailyHourForecast] = useState([]);
    const {dailyForeCast, next_five_day_tab} = useSelector((state) => state.weather);
    console.log('Next Five day tab result:', next_five_day_tab);

    useEffect(() => {
        console.log('Daily Forecast result:', dailyForeCast);
        setDailyHourForecast(dailyForeCast);
    }, [dailyForeCast]);

    const onTabChangeHandler = (tab) => {
        setCurr_tab(tab);
        if(tab === 'All Days') {
            setDailyHourForecast(dailyForeCast);
        } else {
            const filteredDailyForecast = dailyForeCast.filter((item) => item.date === tab);
            setDailyHourForecast(filteredDailyForecast);
        }
    }

    return (
        <div className="weather-forecast-section">
            <h3 className="section-title">Next 5 Days</h3>
            <div className="weather-forecast-day-tabs">
                {
                    next_five_day_tab.length > 0 ?
                    next_five_day_tab.map((tab) => {
                        return <div className={`day-tab ${tab === curr_tab ? 'tab-active' : ''}`} 
                        key={tab} onClick={() => onTabChangeHandler(tab)}>{tab}</div> 
                    }) : ''
                }
            </div>
            <div className="weather-forecast-day-list">
                {
                    dailyHourForecast?.length > 0 ? 
                    dailyHourForecast.map((item, i) => {
                        return (<div className="weather-forecast-day-item" key={i}>
                            <div className="daily-weather-forecast-date-time">
                                <div className="daily-weather-forecast-date">{item?.date}</div>
                                <div className="daily-weather-forecast-time">{item?.time}</div>
                            </div>
                            <img className="daily-weather-forecast-icon" src={`img/static/${item.icon}.svg`} alt="d2" />
                            <div className="daily-forecast-weather-details">
                                <div className="daily-weather-forecast-temperature">{item?.temperature}</div>
                                <div className="daily-weather-forecast-description">{item?.description}</div>
                            </div>
                        </div>)
                    })
                     : ''
                }
               
            </div>
                
        </div>
    ) 
}


export default WeatherForeCast;