import Highlights from './Highlights';
import UnitsToggle from './UnitsToggle';
import WeeklyForecast from './WeeklyForecast';

const WeatherDetails = () => (
  <div className="bg-gray-900 p-24 pt-0 h-screen overflow-y-auto">
    <div className="max-w-5xl mx-auto">
      <UnitsToggle current="C" />
      <WeeklyForecast />
      <Highlights />
    </div>
  </div>
);

export default WeatherDetails;
