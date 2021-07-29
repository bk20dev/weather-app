const HighlightsCard = ({ name, value, unit, children }) => (
  <div className="flex flex-col gap-4 bg-gray-800 text-gray-200 text-center font-semibold p-6 w-full">
    <p>{name}</p>
    <p className="text-4xl mb-6">
      <span className="text-6xl">{value}</span>
      {unit}
    </p>
    {children}
  </div>
);

export default HighlightsCard;
