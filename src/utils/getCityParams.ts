import {nanoid} from '@reduxjs/toolkit';
import { Data } from '../models/models';

export const getCityParams = (data: Data) => {
    return {
        temp: data.current.temp_c,
        cityName: data.location.name,
        country: data.location.country,
        condition: data.current.condition.text,
        icon: data.current.condition.icon,
        id: nanoid()
    }
}