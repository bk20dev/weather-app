const day = 86400000;

const isDayTheSame = (a, b) => Math.floor(a / day) === Math.floor(b / day);

export default isDayTheSame;
