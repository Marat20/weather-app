import {
    ADD_CITY, DELETE_CITY, SWITCH_VALID_CITY
} from "./actionsCities";


export const initialState = {
    cities: [],
    validCity: true,
};

export const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CITY:
            let isCity = state.cities.find(el => el.name.toLowerCase() === action.payload.name.toLowerCase());
            if (isCity) {
                return state
            } else {
                return {
                    ...state,
                    cities: [...state.cities, action.payload]
                };
            }
        case DELETE_CITY:
            let newArr = state.cities.filter(el => el.id !== action.payload);
            return {
                ...state,
                cities: newArr
            }
        case SWITCH_VALID_CITY:
            return {
                ...state,
                validCity: action.payload
            };
        default:
            return state
    }
}