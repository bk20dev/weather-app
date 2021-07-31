import _ from 'lodash';
import { connect } from 'react-redux';
import convertTemp from '../../utils/convertTemp';
import formatDate from '../../utils/formatDate';
import getRelativeDate from '../../utils/getRelativeDate';
import isDayTheSame from '../../utils/isDayTheSame';
import DailyForecast from './DailyForecast';

const WeeklyForecast = ({ unit, weather }) => (
  <div>
    <p className="text-xl font-bold text-gray-200 mb-8">Weekly Forecast</p>
    <div className="w-full overflow-x-auto mb-24">
      <div className="flex gap-8">
        {weather?.week.map((day) => {
          const date = new Date(day.applicable_date);
          if (isDayTheSame(weather.today.applicable_date, date.getTime()))
            return null;

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

const mapStateToProps = (state) => _.pick(state, 'unit', 'weather');

export default connect(mapStateToProps)(WeeklyForecast);
