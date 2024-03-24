import { PATH_ANIMATED_IMG } from '../utils/constants';

export const WeatherCard = ({current_weather_info, cardType}) => {
    return (
        <>
            {
                cardType.map((card) => {
                    return (
                         <div className="weather-temp-card" key={card}>
                             <img src={PATH_ANIMATED_IMG + `/${card}.svg`} alt="wind" className="weather-temp-card-icon" />
                             <div className="weather-temp-card-details">
                                 <div className="weather-temp-card-title">{card}</div>
                                 <div className="weather-temp-card-value text-bold">{current_weather_info[card]}</div>
                             </div>  
                         </div> 
                    )
                })
            }
        </>

    )

}

export default WeatherCard;