const unitReducer = (state = 'C', action) => {
  if (action.type === 'CHANGE_UNIT') {
    return action.payload;
  }

  return state;
};

export default unitReducer;
