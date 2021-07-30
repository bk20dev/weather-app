const convertTemp = (value, to, from = 'C') => {
  if (to === from) return value;
  if (to === 'F') return value * 1.8 + 32;
  return (value - 32) / 1.8;
};

export default convertTemp;
