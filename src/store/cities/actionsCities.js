import {
    nanoid
} from "nanoid";
import { createURL } from "../../helper/createURL";

export const ADD_CITY = 'CITY::ADD_CITY';
export const SWITCH_VALID_CITY = 'CITY::SWITCH_VALID_CITY';
export const DELETE_CITY = 'CITY::DELETE_CITY';

export const addCity = (city) => ({
    type: ADD_CITY,
    payload: city
});

export const switchValidCity = (bool) => ({
    type: SWITCH_VALID_CITY,
    payload: bool
});

export const deleteCity = (cityId) => ({
    type: DELETE_CITY,
    payload: cityId
});


export const addCityWithThunk = (city) => async (dispatch) => {
    const URL = createURL(city);
    const response = await fetch(URL);
    if (response.ok) {
        const data = await response.json();
        const {
            main,
            name,
            sys,
            weather
        } = data;
        const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]['icon']}.svg`;
        const cityId = nanoid();
        dispatch(addCity({
            main,
            name,
            sys,
            weather,
            icon,
            cityId
        }))
        dispatch(switchValidCity(true))
    } else {
        dispatch(switchValidCity(false))
    }

}