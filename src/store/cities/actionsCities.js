import {
    nanoid
} from "nanoid";

export const ADD_CITY = 'CITY::ADD_CITY';
export const SWITCH_VALID_CITY = 'CITY::SWITCH_VALID_CITY';

export const addCity = (city) => ({
    type: ADD_CITY,
    payload: city
});

export const switchValidCity = (bool) => ({
    type: SWITCH_VALID_CITY,
    payload: bool
});

export const addCityWithThunk = (city) => async (dispatch) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`;
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