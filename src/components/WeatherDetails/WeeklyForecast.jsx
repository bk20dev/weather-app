import DailyForecast from './DailyForecast';

const WeeklyForecast = () => (
  <div>
    <p className="text-2xl font-bold text-gray-200 mb-8">Weekly Forecast</p>
    <div className="flex gap-8 mb-24">
      <DailyForecast date="Tomorrow" abbr="s" min={11} max={16} unit="C" />
      <DailyForecast date="Tomorrow" abbr="s" min={11} max={16} unit="C" />
      <DailyForecast date="Tomorrow" abbr="s" min={11} max={16} unit="C" />
      <DailyForecast date="Tomorrow" abbr="s" min={11} max={16} unit="C" />
      <DailyForecast date="Tomorrow" abbr="s" min={11} max={16} unit="C" />
    </div>
  </div>
);

export default WeeklyForecast;
