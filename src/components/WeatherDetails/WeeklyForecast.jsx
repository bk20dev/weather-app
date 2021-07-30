import DailyForecast from './DailyForecast';

const WeeklyForecast = () => (
  <div>
    <p className="text-xl font-bold text-gray-200 mb-8">Weekly Forecast</p>
    <div className="w-full overflow-x-auto mb-24">
      <div className="flex gap-8">
        <DailyForecast date="Tomorrow" abbr="s" min={11} max={16} unit="C" />
        <DailyForecast date="Tomorrow" abbr="s" min={11} max={16} unit="C" />
        <DailyForecast date="Tomorrow" abbr="s" min={11} max={16} unit="C" />
        <DailyForecast date="Tomorrow" abbr="s" min={11} max={16} unit="C" />
        <DailyForecast date="Tomorrow" abbr="s" min={11} max={16} unit="C" />
      </div>
    </div>
  </div>
);

export default WeeklyForecast;
