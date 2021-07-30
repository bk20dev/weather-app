import Search from './Search/Search';

const App = () => (
  <div>
    <div className="flex flex-col xl:flex-row">
      <div className="xl:w-116 xl:h-screen xl:overflow-y-auto">
        <Search />
      </div>
      <div className="flex-grow xl:h-screen xl:overflow-y-auto"></div>
    </div>
  </div>
);

export default App;

// import fetchWeather from '../actions/fetchWeather';
// import { useEffect } from 'react';
// import { connect } from 'react-redux';
// import WeatherDetails from './WeatherDetails/WeatherDetails';
// import WeatherSummary from './WeatherSummary';

// const App = ({ unit, weather: { today, location }, fetchWeather }) => {
//   useEffect(() => {
//     fetchWeather(44418);
//   }, [fetchWeather]);

//   return (
//     <div className="flex flex-col xl:flex-row">
//       <div className="xl:w-116 xl:h-screen xl:overflow-y-auto">
//         {today && (
//           <WeatherSummary
//             temperature={today.the_temp}
//             unit={unit}
//             name={today.weather_state_name}
//             abbr={today.weather_state_abbr}
//             date={new Date(today.applicable_date)}
//             location={location}
//           />
//         )}
//       </div>
//       <div className="flex-grow xl:h-screen xl:overflow-y-auto">
//         <WeatherDetails />
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = ({ unit, weather }) => ({ unit, weather });

// export default connect(mapStateToProps, { fetchWeather })(App);
