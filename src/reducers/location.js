const locationReducer = (state = null, action) => {
  if (action.type === 'FETCH_LOCATION') return action.payload;
  return state;
};

export default locationReducer;
