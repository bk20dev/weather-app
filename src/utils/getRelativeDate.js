const day = 86400000;

const isDayTheSame = (a, b) => Math.floor(a / day) === Math.floor(b / day);

const getRelativeDate = (current, to) => {
  current = current.getTime();
  to = to.getTime();

  if (isDayTheSame(current, to)) return 'Today';
  if (isDayTheSame(current + day, to)) return 'Tomorrow';
  return '';
};

export default getRelativeDate;
