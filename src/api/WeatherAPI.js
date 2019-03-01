class WeatherAPI {

   /**
    * @returns {Weather} useful weather information
    */
   async getWeather(latitude = 0, longitude = 0, seconds_in_future = 0) {
   }
}

// navigator.geolocation.getCurrentPosition(console.log /* callback functions */, console.log);
// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition

export default (new WeatherAPI());
