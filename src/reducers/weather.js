import _ from 'lodash';

const INITIAL_STATE = {
  loaded: false,
  location: null,
  week: null,
  today: null,
  woeid: null,
};

const weatherReducer = (state = INITIAL_STATE, { type, payload }) => {
  if (type === 'CLEAR_WEATHER') return INITIAL_STATE;
  if (type !== 'FETCH_WEATHER') return state;

  const location = payload.title;
  const { woeid } = payload;

  const week = _.chain(payload.consolidated_weather)
    .map(({ applicable_date, ...rest }) => ({
      applicable_date: new Date(applicable_date).getTime(),
      ...rest,
    }))
    .value();

  const today = week[0];

  return {
    loaded: true,
    location,
    woeid,
    week,
    today,
  };
};

export default weatherReducer;
