import key from '../.env/weather';

class WeatherURLMaker {
    //const WEATHER_API_URL = `https://api.weatherapi.com/v1/current.json?key=${key}&q=Kolkata&aqi=no`
    lat = '';
    lng = '';

    constructor(lat: string, lng: string){
        this.lat = lat;
        this.lng = lng;
    }

    URL(){
        return `https://api.weatherapi.com/v1/current.json?key=${key}&q=${this.lat},${this.lng}&aqi=no`;
    }
}

export default WeatherURLMaker;