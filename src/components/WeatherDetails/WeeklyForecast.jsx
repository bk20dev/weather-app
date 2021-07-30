import { connect } from 'react-redux';
import DailyForecast from './DailyForecast';

const WeeklyForecast = ({ unit }) => (
  <div>
    <p className="text-xl font-bold text-gray-200 mb-8">Weekly Forecast</p>
    <div className="w-full overflow-x-auto mb-24">
      <div className="flex gap-8">
        <DailyForecast date="Tomorrow" abbr="s" min={11} max={16} unit={unit} />
        <DailyForecast date="Tomorrow" abbr="s" min={11} max={16} unit={unit} />
        <DailyForecast date="Tomorrow" abbr="s" min={11} max={16} unit={unit} />
        <DailyForecast date="Tomorrow" abbr="s" min={11} max={16} unit={unit} />
        <DailyForecast date="Tomorrow" abbr="s" min={11} max={16} unit={unit} />
      </div>
    </div>
  </div>
);

const mapStateToProps = ({ unit }) => ({ unit });

export default connect(mapStateToProps)(WeeklyForecast);
