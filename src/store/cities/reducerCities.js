import {
    ADD_CITY, SWITCH_VALID_CITY
} from "./actionsCities";


export const initialState = {
    cities: [],
    validCity: true,
};

export const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CITY:
            state.cities.forEach(el => {
                if (el.name.toLowerCase() === action.payload.name.toLowerCase()) return
            })
            return {
                ...state,
                cities: [...state.cities, action.payload]
            };
        case SWITCH_VALID_CITY:
            return {
                ...state,
                validCity: action.payload
            };
        default:
            return state
    }
}