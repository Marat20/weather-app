export const getCityParams = (data) => {
    return {
        temp: data.current.temp_c,
        cityName: data.location.name,
        country: data.location.country,
        condition: data.current.condition.text,
        icon: data.current.condition.icon
    }
}