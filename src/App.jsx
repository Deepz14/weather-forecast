import './App.css'
import CurrentWeather from './components/CurrentWeather'
import Navbar from './components/Navbar'
import WeatherForeCast from './components/WeatherForecast'

function App() {
  return (
    <div className='app'>
        <Navbar />
        <CurrentWeather />
        <WeatherForeCast />
    </div>
  )
}

export default App
