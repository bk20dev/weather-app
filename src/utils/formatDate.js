const formatDate = (date) => {
  // prettier-ignore
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const weekday = date.getDay();
  const day = date.getDate();
  const month = date.getMonth();

  return `${weekdays[weekday]}, ${day} ${months[month]}`;
};

export default formatDate;
