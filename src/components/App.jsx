import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import fetchWeather from '../actions/fetchWeather';
import Search from './Search/Search';
import WeatherDetails from './WeatherDetails/WeatherDetails';
import WeatherSummary from './WeatherSummary';

const App = ({ unit, weather: { today, location }, fetchWeather }) => {
  const [searchVisible, setSearchVisible] = useState(false);

  useEffect(() => {
    fetchWeather(44418);
  }, [fetchWeather]);

  return (
    <div className="flex flex-col xl:flex-row relative">
      {searchVisible && (
        <div className="absolute top-0 left-0 w-full h-full xl:w-116 xl:h-screen xl:overflow-y-auto">
          <Search onClose={() => setSearchVisible(false)} />
        </div>
      )}
      <div className="xl:w-116 xl:h-screen xl:overflow-y-auto">
        {today && (
          <WeatherSummary
            temperature={today.the_temp}
            unit={unit}
            name={today.weather_state_name}
            abbr={today.weather_state_abbr}
            date={new Date(today.applicable_date)}
            location={location}
            onSearchClicked={() => setSearchVisible(true)}
          />
        )}
      </div>
      <div className="flex-grow xl:h-screen xl:overflow-y-auto">
        <WeatherDetails />
      </div>
    </div>
  );
};

const mapStateToProps = ({ unit, weather }) => ({ unit, weather });

export default connect(mapStateToProps, { fetchWeather })(App);
