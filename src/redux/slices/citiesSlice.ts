import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Data } from '../../models/models';
import { getCityParams } from '../../utils/getCityParams';
import { CityParam } from '../../models/models';

export const fetchCity = createAsyncThunk(
  'city/addCity',
  async (city: string, { dispatch }) => {
    const URL = `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${city}&aqi=no`;
    const response = await fetch(URL);
    if (response.ok) {
      const data: Data = await response.json();
      const cityParams: CityParam = getCityParams(data);
      dispatch(addCity(cityParams));
      dispatch(switchValidCity(true));
    } else {
      dispatch(switchValidCity(false));
    }
  }
);

interface IState {
  cities: CityParam[];
  validCity: boolean;
}

const initialState: IState = {
  cities: [],
  validCity: true,
};

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    addCity(state, action) {
      const isCityExisted = state.cities.find(
        (city) =>
          city.cityName.toLowerCase() === action.payload.cityName.toLowerCase()
      );
      !isCityExisted && state.cities.push(action.payload);
    },
    deleteCity(state, action) {
      const filteredCities = state.cities.filter(
        (city) => city.id !== action.payload
      );
      state.cities = filteredCities;
    },
    switchValidCity(state, action) {
      state.validCity = action.payload;
    },
  },
});

export const { addCity, deleteCity, switchValidCity } = citiesSlice.actions;
export default citiesSlice.reducer;
