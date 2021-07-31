import _ from 'lodash';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import clearWeather from '../actions/clearWeather';
import fetchLocation from '../actions/fetchLocation';
import fetchWeather from '../actions/fetchWeather';
import Loading from './Loading';
import Search from './Search/Search';
import WeatherDetails from './WeatherDetails/WeatherDetails';
import WeatherSummary from './WeatherSummary';

const App = ({
  fetchLocation,
  location,
  fetchWeather,
  weather,
  unit,
  clearWeather,
}) => {
  const [searchVisible, setSearchVisible] = useState(false);

  useEffect(() => {
    fetchLocation();
  }, [fetchLocation]);

  useEffect(() => {
    if (!location) return;
    if (!location.allowed) return fetchWeather(523920);

    const getWoeid = async () => {
      const { latitude, longitude } = location;
      const place = `${latitude},${longitude}`;

      const response = await fetch(
        `https://cors.bridged.cc/https://www.metaweather.com/api/location/search/?lattlong=${place}`
      );

      const data = await response.json();
      fetchWeather(data[0].woeid);
    };

    getWoeid();
  }, [location, fetchWeather]);

  if (!location || !weather.loaded) return <Loading />;

  return (
    <div
      className={`flex flex-col xl:flex-row relative ${
        searchVisible ? 'overflow-hidden h-screen' : ''
      }`}
    >
      <div className="xl:w-116 xl:h-screen xl:overflow-y-auto">
        {(() => {
          const { today, location } = weather;

          return (
            <WeatherSummary
              temperature={today?.the_temp ?? 'nd'}
              unit={unit}
              name={today?.weather_state_name ?? 'no data'}
              abbr={today?.weather_state_abbr ?? 'c'}
              date={today ? new Date(today.applicable_date) : new Date()}
              location={location}
              onSearchClicked={() => setSearchVisible(true)}
              onLocationClicked={() => {
                clearWeather();
                fetchLocation();
              }}
            />
          );
        })()}
      </div>
      <div className="flex-grow xl:h-screen xl:overflow-y-auto">
        <WeatherDetails />
      </div>
      {searchVisible && (
        <div className="absolute top-0 left-0 w-full h-full xl:w-116 xl:h-screen xl:overflow-y-auto">
          <Search onClose={() => setSearchVisible(false)} />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => _.pick(state, 'location', 'weather', 'unit');

export default connect(mapStateToProps, {
  fetchLocation,
  fetchWeather,
  clearWeather,
})(App);
