const ProgressBar = ({ value }) => (
  <div className="flex flex-col gap-1 text-xs font-bold text-gray-400">
    <div className="flex justify-between">
      <span>0</span>
      <span>50</span>
      <span>100</span>
    </div>
    <div className="bg-gray-400 rounded-full">
      <div
        className="bg-yellow-300 h-2 rounded-full"
        style={{ width: `${value * 100}%` }}
      ></div>
    </div>
    <p className="text-right">%</p>
  </div>
);

export default ProgressBar;
