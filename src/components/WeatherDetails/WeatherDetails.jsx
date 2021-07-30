import _ from 'lodash';
import { connect } from 'react-redux';
import changeUnit from '../../actions/changeUnit';
import Highlights from './Highlights';
import UnitsToggle from './UnitsToggle';
import WeeklyForecast from './WeeklyForecast';

const WeatherDetails = ({ unit, changeUnit }) => (
  <div className="bg-gray-900 p-8 pt-0 min-h-full lg:px-24 lg:pb-24">
    <div className="max-w-5xl mx-auto text-center">
      <UnitsToggle current={unit} onSelect={changeUnit} />
      <WeeklyForecast />
      <Highlights />
    </div>
  </div>
);

const mapStateToProps = (state) => _.pick(state, 'unit');

export default connect(mapStateToProps, { changeUnit })(WeatherDetails);
