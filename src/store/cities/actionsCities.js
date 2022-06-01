import {
    nanoid
} from "nanoid";
import { createURL } from "../../helper/createURL";
import { getCityParams } from '../../helper/getCityParams'

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
        const cityParams = getCityParams(data);
        cityParams.id = nanoid();
        dispatch(addCity(cityParams));
        dispatch(switchValidCity(true))
    } else {
        dispatch(switchValidCity(false))
    }

}