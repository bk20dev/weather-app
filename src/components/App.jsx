import WeatherDetails from './WeatherDetails/WeatherDetails';
import WeatherSummary from './WeatherSummary';

const App = () => (
  <div className="flex flex-col xl:flex-row">
    <div className="xl:w-116 xl:h-screen xl:overflow-y-auto">
      <WeatherSummary
        temperature={15}
        unit="C"
        name="Shower"
        abbr="s"
        date={new Date()}
        location="Helsinki"
      />
    </div>
    <div className="flex-grow xl:h-screen xl:overflow-y-auto">
      <WeatherDetails />
    </div>
  </div>
);

export default App;
