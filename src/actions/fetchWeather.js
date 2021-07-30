const fetchWeather = (woeid) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://cors.bridged.cc/https://www.metaweather.com/api/location/${woeid}/`
    );

    const data = await response.json();

    dispatch({
      type: 'FETCH_WEATHER',
      payload: data,
    });
  };
};

export default fetchWeather;
