import WeatherURLMaker from '../../constants/URL';


const getWeatherDataAsJSON = async (lat: string, lng: string) => {
    const url = new WeatherURLMaker(lat,lng).URL();
    return url;
}

export default getWeatherDataAsJSON;