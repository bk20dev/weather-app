import Highlights from './Highlights';
import UnitsToggle from './UnitsToggle';
import WeeklyForecast from './WeeklyForecast';

const WeatherDetails = () => (
  <div className="bg-gray-900 p-24 py-0">
    <UnitsToggle current="C" />
    <WeeklyForecast />
    <Highlights />
  </div>
);

export default WeatherDetails;
