import Highlights from './Highlights';
import WeeklyForecast from './WeeklyForecast';

const WeatherDetails = () => (
  <div className="bg-gray-900 p-24">
    <WeeklyForecast />
    <Highlights />
  </div>
);

export default WeatherDetails;
