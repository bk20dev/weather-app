import _ from 'lodash';

const fetchLocation = () => (dispatch) => {
  navigator.geolocation.getCurrentPosition(
    ({ coords }) => {
      dispatch({
        type: 'FETCH_LOCATION',
        payload: { allowed: true, ..._.pick(coords, 'latitude', 'longitude') },
      });
    },
    () => {
      dispatch({ type: 'FETCH_LOCATION', payload: { allowed: false } });
    }
  );
};

export default fetchLocation;
