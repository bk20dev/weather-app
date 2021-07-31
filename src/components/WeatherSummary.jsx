import LocationIcon from '../assets/location.svg';
import PinIcon from '../assets/pin.svg';
import convertTemp from '../utils/convertTemp';
import formatDate from '../utils/formatDate';
import getIconPath from '../utils/getIconPath';
import getRelativeDate from '../utils/getRelativeDate';

const WeatherSummary = ({
  temperature,
  unit,
  name,
  abbr,
  date,
  location,
  onSearchClicked,
  locationAllowed,
  onLocationClicked,
}) => {
  const relativeDate = getRelativeDate(new Date(date));
  const relativeDateText = relativeDate ? `${relativeDate} · ` : '';

  return (
    <div className="flex flex-col bg-gray-800 text-gray-200 p-14 min-h-full">
      <div className="flex items-center justify-between mb-32">
        <button className="bg-gray-500 px-4 py-2" onClick={onSearchClicked}>
          Search for places
        </button>
        {locationAllowed && (
          <button
            className="bg-gray-500 p-2 rounded-full"
            onClick={onLocationClicked}
          >
            <img src={LocationIcon} alt="Current location" className="h-6" />
          </button>
        )}
      </div>
      <div className="flex-grow flex flex-col gap-20 text-center">
        <img
          src={getIconPath(abbr ?? 'c')}
          alt=""
          className="h-56 object-contain"
        />
        <div>
          <span className="text-9xl font-semibold">
            {!temperature ? '-' : Math.round(convertTemp(temperature, unit))}
          </span>
          <span className="text-5xl font-semibold text-gray-400">°{unit}</span>
        </div>
        <p className="text-4xl font-semibold text-gray-400">
          {name ?? 'no data'}
        </p>
        <div className="text-lg text-gray-400">
          <p className="mb-8">
            {relativeDateText}
            {formatDate(new Date())}
          </p>
          <div className="flex items-center justify-center">
            <img src={PinIcon} alt="Location" className="h-6 opacity-50" />
            <span className="font-semibold">{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherSummary;
