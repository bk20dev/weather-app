import ProgressBar from './ProgressBar';
import WindDirection from './WindDirection';
import HighlightsCard from './HighlightsCard';
import { connect } from 'react-redux';

const Highlights = ({ today }) => (
  <div>
    <p className="text-xl font-bold text-gray-200 mb-8">Today's Highlights</p>
    {today && (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <HighlightsCard
          name="Wind status"
          value={Math.round(today.wind_speed)}
          unit="mph"
        >
          <WindDirection
            compass={today.wind_direction_compass}
            degrees={today.wind_direction}
          />
        </HighlightsCard>
        <HighlightsCard name="Humidity" value={today.humidity} unit="%">
          <ProgressBar value={today.humidity / 100} />
        </HighlightsCard>
        <HighlightsCard
          name="Visibility"
          value={today.visibility.toFixed(1)}
          unit=" miles"
        />
        <HighlightsCard
          name="Air pressure"
          value={Math.round(today.air_pressure)}
          unit=" mb"
        />
      </div>
    )}
  </div>
);

const mapStateToProps = ({ weather }) => ({ today: weather.today });

export default connect(mapStateToProps)(Highlights);
