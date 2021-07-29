import DirectionImage from '../assets/direction.svg';

const WindDirection = ({ compass, degrees }) => (
  <div className="flex items-center justify-center gap-2 font-semibold">
    <div
      className="bg-gray-500 rounded-full p-2"
      style={{ transform: `rotate(${degrees}deg)` }}
    >
      <img src={DirectionImage} alt="" className="w-4" />
    </div>
    <span>{compass}</span>
  </div>
);

export default WindDirection;
