import WeatherSummary from './WeatherSummary';

const App = () => (
  <WeatherSummary
    temperature={15}
    unit="C"
    name="Shower"
    abbr="s"
    date={new Date()}
    location="Helsinki"
  />
);

export default App;
