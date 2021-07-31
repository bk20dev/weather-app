const fetchWeather = (woeid) => async (dispatch, getState) => {
  if (woeid === getState().weather.woeid) return;

  const response = await fetch(
    `https://cors.bridged.cc/https://www.metaweather.com/api/location/${woeid}/`
  );

  const data = await response.json();

  dispatch({
    type: 'FETCH_WEATHER',
    payload: data,
  });
};

export default fetchWeather;
