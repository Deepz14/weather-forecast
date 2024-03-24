import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    current_weather_info: {},
    next_five_day_tab: [],
    hourly_weather_info: [],
    dailyForeCast: []
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    add_weatherInfo: (state, action) => {
      return {...state, current_weather_info: action.payload}
    },
    add_next_five_day_tab: (state, action) => {
      return {...state, next_five_day_tab: action.payload} 
    },
    add_hourly_weather_info: (state, action) => {
      return {...state, hourly_weather_info: action.payload}
    },
    add_dailyForecast: (state, action) => {
      return {...state, dailyForeCast: action.payload}
    }
  },
})

// Action creators are generated for each case reducer function
export const { add_weatherInfo , add_dailyForecast, add_next_five_day_tab, add_hourly_weather_info } = weatherSlice.actions;

export default weatherSlice.reducer;