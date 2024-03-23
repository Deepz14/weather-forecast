import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    current_weather_info: {},
    dailyForeCast: []
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    add_weatherInfo: (state, action) => {
      console.log("payload: ", action);
      return {...state, current_weather_info: action.payload}
    },
    add_dailyForecast: (state, action) => {
      console.log("payload: ", action);
      return {...state, dailyForeCast: action.payload}
    }
  },
})

// Action creators are generated for each case reducer function
export const { add_weatherInfo ,add_dailyForecast } = weatherSlice.actions;

export default weatherSlice.reducer;