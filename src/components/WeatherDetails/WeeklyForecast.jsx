import DailyForecast from './DailyForecast';

const WeeklyForecast = () => (
  <div className="flex gap-8">
    <DailyForecast date="Tomorrow" abbr="s" min={11} max={16} unit="C" />
    <DailyForecast date="Tomorrow" abbr="s" min={11} max={16} unit="C" />
    <DailyForecast date="Tomorrow" abbr="s" min={11} max={16} unit="C" />
    <DailyForecast date="Tomorrow" abbr="s" min={11} max={16} unit="C" />
    <DailyForecast date="Tomorrow" abbr="s" min={11} max={16} unit="C" />
  </div>
);

export default WeeklyForecast;
