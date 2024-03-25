import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    current_location: '',
    current_weather_info: {},
    next_five_day_tab: [],
    hourly_weather_info: [],
    dailyForeCast: [],
    loadingState: true,
    errorState: false
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    add_Current_location: (state, action) => {
      return {...state, current_location: action.payload}
    },
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
    },
    add_loadingState: (state, action) => {
      return {...state, loadingState: action.payload}
    },
    add_errorState: (state, action) => {
      return {...state, errorState: action.payload}
    }
  },
})

// Action creators are generated for each case reducer function
export const { add_weatherInfo , add_dailyForecast, add_Current_location,
  add_next_five_day_tab, add_hourly_weather_info, add_loadingState, add_errorState } = weatherSlice.actions;

export default weatherSlice.reducer;