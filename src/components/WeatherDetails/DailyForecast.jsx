import getIconPath from '../../utils/getIconPath';

const DailyForecast = ({ date, abbr, unit, min, max }) => (
  <div className="flex flex-col gap-6 bg-gray-800 text-gray-200 text-center font-semibold p-6 w-full">
    <p>{date}</p>
    <img src={getIconPath(abbr)} alt="" className="h-16 object-contain" />
    <div>
      <span className="mr-4">
        {min}°{unit}
      </span>
      <span className="text-gray-400">
        {max}°{unit}
      </span>
    </div>
  </div>
);

export default DailyForecast;
