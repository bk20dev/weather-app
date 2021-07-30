import _ from 'lodash';
import isDayTheSame from '../utils/isDayTheSame';

const INITIAL_STATE = {
  location: null,
  week: null,
  today: null,
};

const weatherReducer = (state = INITIAL_STATE, { type, payload }) => {
  if (type !== 'FETCH_WEATHER') return state;

  const location = payload.title;

  const week = _.chain(payload.consolidated_weather)
    .map(({ applicable_date, ...rest }) => ({
      applicable_date: new Date(applicable_date).getTime(),
      ...rest,
    }))
    .value();

  const today = week.find((weather) =>
    isDayTheSame(Date.now(), weather.applicable_date)
  );

  return {
    location,
    week,
    today,
  };
};

export default weatherReducer;
