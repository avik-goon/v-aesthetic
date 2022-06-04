import WeatherURLMaker from '../../constants/URL';


const getWeatherDataAsJSON = async (lat: number, lng: number) => {
    const url = new WeatherURLMaker(lat,lng).URL();
    return (await fetch(url, {method: 'GET'})).json();
}

export default getWeatherDataAsJSON;