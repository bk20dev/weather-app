import Highlights from './Highlights';
import UnitsToggle from './UnitsToggle';
import WeeklyForecast from './WeeklyForecast';

const WeatherDetails = () => (
  <div className="bg-gray-900 p-8 pt-0 min-h-full lg:px-24 lg:pb-24">
    <div className="max-w-5xl mx-auto text-center">
      <UnitsToggle current="C" />
      <WeeklyForecast />
      <Highlights />
    </div>
  </div>
);

export default WeatherDetails;
