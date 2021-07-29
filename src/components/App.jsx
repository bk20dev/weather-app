import WeatherDetails from './WeatherDetails/WeatherDetails';
import WeatherSummary from './WeatherSummary';

const App = () => (
  <div className="flex">
    <div className="w-116">
      <WeatherSummary
        temperature={15}
        unit="C"
        name="Shower"
        abbr="s"
        date={new Date()}
        location="Helsinki"
      />
    </div>
    <div className="flex-grow">
      <WeatherDetails />
    </div>
  </div>
);

export default App;
