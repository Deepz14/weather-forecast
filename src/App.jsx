import './App.css'
import { Provider } from 'react-redux'
import appStore from './store/store';
import CurrentWeather from './components/CurrentWeather'
import Navbar from './components/Navbar'
import WeatherForeCast from './components/WeatherForecast'

function App() {
  return (
    <div className='app'>
      <Provider store={appStore}>
        <Navbar />
        <CurrentWeather />
        <WeatherForeCast />
      </Provider>
    </div>
  )
}

export default App
