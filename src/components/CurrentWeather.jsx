import { PATH_ANIMATED_IMG } from '../utils/constants';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { update_unit } from '../store/weatherSlice';

export const CurrentWeather = () => {

    const {current_weather_info, hourly_weather_info, loadingState, current_unit} = useSelector((state) => state.weather);
    const [loadingClassName, setLoadingClassName] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if(loadingState){
            setLoadingClassName('loading-animation');
        }else{
            setLoadingClassName('');
        }
        } , [loadingState] 
    )

    const onChangeUnitHandler = () => {
        const unitToChange = current_unit === 'metric' ? 'imperial' : 'metric';
        dispatch(update_unit(unitToChange));
    }

    return (
        <div className="current-weather-section">
            <h3 className="section-title">Today Overview</h3>
            <div className="current-weather-cards">
                <div className="current-weather-card-left">
                    <div className={`current-detail-animation ${loadingClassName}`}>
                         <img className={`${loadingClassName}`} src={`img/static/${current_weather_info?.animated_img}.svg`} alt="animated_img" />
                    </div>
                    <div className={`current-detail-temp text-bold ${loadingClassName}`}>
                        {current_weather_info?.temperature}  <span onClick={onChangeUnitHandler} className={`toggle-temps ${loadingClassName}`}>{current_unit === 'metric' ? ' /  F' : ' / C '}</span>
                    </div>
                    <div className={`cuurent-detail-desc ${loadingClassName}`}>{current_weather_info?.description}</div>
                     <hr />
                     <div className="current-location-container">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                            d="M20 11.1755C20 15.6907 16.4183 21 12 21C7.58172 21 4 15.6907 4 11.1755C4 6.66029 7.58172 3 12 3C16.4183 3 20 6.66029 20 11.1755Z"
                            stroke="#0F172A"
                            strokeWidth="1.5"
                            />
                            <path
                            d="M9.5 10.5C9.5 9.11929 10.6193 8 12 8C13.3807 8 14.5 9.11929 14.5 10.5C14.5 11.8807 13.3807 13 12 13C10.6193 13 9.5 11.8807 9.5 10.5Z"
                            stroke="#0F172A"
                            strokeWidth="1.5"
                            />
                        </svg>
                        <div className={`current-location-city ${loadingClassName}`}>{current_weather_info?.location}</div>
                     </div>
                     <div className="current-date-container">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                            d="M3.83327 15.2485L4.56432 15.0809L3.83327 15.2485ZM3.83327 9.35323L4.56432 9.52078L3.83327 9.35323ZM20.1667 9.35323L19.4357 9.52079L20.1667 9.35323ZM20.1667 15.2485L19.4357 15.0809L20.1667 15.2485ZM14.8801 20.6589L15.0552 21.3882L14.8801 20.6589ZM9.11986 20.6589L9.29493 19.9296L9.11986 20.6589ZM9.11985 3.94279L9.29493 4.67207L9.11985 3.94279ZM14.8801 3.94279L15.0552 3.21351L14.8801 3.94279ZM8.82008 3C8.82008 2.58579 8.48429 2.25 8.07008 2.25C7.65587 2.25 7.32008 2.58579 7.32008 3H8.82008ZM7.32008 5.51375C7.32008 5.92796 7.65587 6.26375 8.07008 6.26375C8.48429 6.26375 8.82008 5.92796 8.82008 5.51375H7.32008ZM16.6799 3C16.6799 2.58579 16.3441 2.25 15.9299 2.25C15.5157 2.25 15.1799 2.58579 15.1799 3H16.6799ZM15.1799 5.51375C15.1799 5.92796 15.5157 6.26375 15.9299 6.26375C16.3441 6.26375 16.6799 5.92796 16.6799 5.51375H15.1799ZM4.56432 15.0809C4.14523 13.2524 4.14523 11.3493 4.56432 9.52078L3.10223 9.18568C2.63259 11.2347 2.63259 13.367 3.10223 15.416L4.56432 15.0809ZM19.4357 9.52079C19.8548 11.3493 19.8548 13.2524 19.4357 15.0809L20.8978 15.416C21.3674 13.367 21.3674 11.2347 20.8978 9.18568L19.4357 9.52079ZM14.7051 19.9296C12.9258 20.3568 11.0742 20.3568 9.29493 19.9296L8.94478 21.3882C10.9542 21.8706 13.0458 21.8706 15.0552 21.3882L14.7051 19.9296ZM9.29493 4.67207C11.0742 4.24493 12.9258 4.24493 14.7051 4.67207L15.0552 3.21351C13.0458 2.73111 10.9542 2.73111 8.94478 3.21351L9.29493 4.67207ZM9.29493 19.9296C6.95607 19.3682 5.11769 17.4953 4.56432 15.0809L3.10223 15.416C3.77946 18.3708 6.03739 20.6902 8.94478 21.3882L9.29493 19.9296ZM15.0552 21.3882C17.9626 20.6902 20.2205 18.3708 20.8978 15.416L19.4357 15.0809C18.8823 17.4953 17.0439 19.3682 14.7051 19.9296L15.0552 21.3882ZM14.7051 4.67207C17.0439 5.23355 18.8823 7.10642 19.4357 9.52079L20.8978 9.18568C20.2205 6.23089 17.9626 3.91147 15.0552 3.21351L14.7051 4.67207ZM8.94478 3.21351C6.03739 3.91147 3.77946 6.23089 3.10223 9.18568L4.56432 9.52078C5.11769 7.10641 6.95607 5.23355 9.29493 4.67207L8.94478 3.21351ZM4.14016 9.02886H19.8598V7.52886H4.14016V9.02886ZM7.32008 3V5.51375H8.82008V3H7.32008ZM15.1799 3V5.51375H16.6799V3H15.1799Z"
                            fill="#0F172A"
                            />
                            <path
                            d="M13.4419 13.924C13.8469 13.636 14.0989 13.204 14.0989 12.619C14.0989 11.404 13.1629 10.774 12.0559 10.774C10.9489 10.774 10.0039 11.404 10.0039 12.619C10.0039 13.204 10.2649 13.636 10.6609 13.924C10.1119 14.257 9.79688 14.806 9.79688 15.445C9.79688 16.606 10.6519 17.326 12.0559 17.326C13.4509 17.326 14.3149 16.606 14.3149 15.445C14.3149 14.806 13.9999 14.257 13.4419 13.924ZM12.0559 11.944C12.5239 11.944 12.8659 12.214 12.8659 12.682C12.8659 13.141 12.5239 13.429 12.0559 13.429C11.5879 13.429 11.2459 13.141 11.2459 12.682C11.2459 12.214 11.5879 11.944 12.0559 11.944ZM12.0559 16.156C11.4619 16.156 11.0299 15.85 11.0299 15.283C11.0299 14.725 11.4619 14.419 12.0559 14.419C12.6499 14.419 13.0819 14.725 13.0819 15.283C13.0819 15.85 12.6499 16.156 12.0559 16.156Z"
                            fill="#0F172A"
                            />
                        </svg>
                        <div className={`current-date ${loadingClassName}`}>{current_weather_info?.date}</div>
                     </div>
                </div>
                <div className="current-weather-card-center-left">  
                    <div className="weather-temp-card">
                        <img src={PATH_ANIMATED_IMG + '/wind-speed.svg'} alt="wind" className="weather-temp-card-icon" />
                        <div className="weather-temp-card-details">
                            <div className="weather-temp-card-title">Wind Speed</div>
                            <div className={`weather-temp-card-value text-bold ${loadingClassName}`}>{current_weather_info?.wind_speed}</div>
                        </div>  
                    </div> 
                    <div className="weather-temp-card">
                        <img src={PATH_ANIMATED_IMG + '/pressure.svg'} alt="wind" className="weather-temp-card-icon" />
                        <div className="weather-temp-card-details">
                            <div className="weather-temp-card-title">Pressure</div>
                            <div className={`weather-temp-card-value text-bold ${loadingClassName}`}>{current_weather_info?.pressure}</div>
                        </div>  
                    </div> 
                    <div className="weather-temp-card">
                        <img src={PATH_ANIMATED_IMG + '/sunrise.svg'} alt="wind" className="weather-temp-card-icon" />
                        <div className="weather-temp-card-details">
                            <div className="weather-temp-card-title">Sunrise</div>
                            <div className={`weather-temp-card-value text-bold ${loadingClassName}`}>{current_weather_info?.sunrise}</div>
                        </div>  
                    </div> 
                </div>
                <div className="current-weather-card-center-right">  
                    <div className="weather-temp-card">
                        <img src={PATH_ANIMATED_IMG + '/humidity.svg'} alt="wind" className="weather-temp-card-icon" />
                        <div className="weather-temp-card-details">
                            <div className="weather-temp-card-title">Humidity</div>
                            <div className={`weather-temp-card-value text-bold ${loadingClassName}`}>{current_weather_info?.humidity} %</div>
                        </div>  
                    </div> 
                    <div className="weather-temp-card">
                        <img src={PATH_ANIMATED_IMG + '/visibility.svg'} alt="wind" className="weather-temp-card-icon" />
                        <div className="weather-temp-card-details">
                            <div className="weather-temp-card-title">Visibility</div>
                            <div className={`weather-temp-card-value text-bold ${loadingClassName}`}>{current_weather_info?.visibility}</div>
                        </div>  
                    </div> 
                    <div className="weather-temp-card">
                        <img src={PATH_ANIMATED_IMG + '/sunset.svg'} alt="wind" className="weather-temp-card-icon" />
                        <div className="weather-temp-card-details">
                            <div className="weather-temp-card-title">Sunset</div>
                            <div className={`weather-temp-card-value text-bold ${loadingClassName}`}>{current_weather_info?.sunset}</div>
                        </div>  
                    </div> 
                </div>
                <div className="current-weather-card-right">
                    {
                        hourly_weather_info.length > 0 ?
                        hourly_weather_info.map((item, index) => {
                            return (
                                <div className="daily-forecast" key={index}>
                                    <div className="left-info">
                                        <div className={`left-info-day ${loadingClassName}`}>{item?.day}</div>
                                        <div className={`left-info-time ${loadingClassName}`}>
                                            {item?.time}
                                        </div>
                                    </div>
                                    <div className="right-info">
                                        <div className={`right-info-temp text-bold ${loadingClassName}`}>
                                            {item?.temperature}
                                        </div>
                                    </div>
                                </div>)
                            })
                        : ''
                    }
                </div>
            </div>
        </div>
    )
}


export default CurrentWeather;