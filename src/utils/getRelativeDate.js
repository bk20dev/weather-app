import isDayTheSame from './isDayTheSame';

const day = 86400000;

const getRelativeDate = (current, to) => {
  current = current.getTime();
  to = to.getTime();

  if (isDayTheSame(current, to)) return 'Today';
  if (isDayTheSame(current + day, to)) return 'Tomorrow';
  return '';
};

export default getRelativeDate;
