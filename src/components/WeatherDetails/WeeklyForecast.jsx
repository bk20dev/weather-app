import { connect } from 'react-redux';
import formatDate from '../../utils/formatDate';
import getRelativeDate from '../../utils/getRelativeDate';
import DailyForecast from './DailyForecast';
import convertTemp from '../../utils/convertTemp';
import isDayTheSame from '../../utils/isDayTheSame';

const WeeklyForecast = ({ unit, week }) => (
  <div>
    <p className="text-xl font-bold text-gray-200 mb-8">Weekly Forecast</p>
    <div className="w-full overflow-x-auto mb-24">
      <div className="flex gap-8">
        {week?.map((day) => {
          const date = new Date(day.applicable_date);
          if (isDayTheSame(Date.now(), date.getTime())) return null;

          return (
            <DailyForecast
              key={day.applicable_date}
              date={getRelativeDate(date) || formatDate(date)}
              abbr={day.weather_state_abbr}
              min={Math.round(convertTemp(day.min_temp, unit))}
              max={Math.round(convertTemp(day.max_temp, unit))}
              unit={unit}
            />
          );
        })}
      </div>
    </div>
  </div>
);

const mapStateToProps = ({ unit, weather }) => ({ unit, week: weather.week });

export default connect(mapStateToProps)(WeeklyForecast);
