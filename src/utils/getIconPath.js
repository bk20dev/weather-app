const images = require.context('../assets/icons', false);

const getIconPath = (abbr) => images(`./${abbr}.png`).default;
export default getIconPath;
