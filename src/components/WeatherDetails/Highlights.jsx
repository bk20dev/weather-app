import ProgressBar from './ProgressBar';
import WindDirection from './WindDirection';
import HighlightsCard from './HighlightsCard';

const Highlights = () => (
  <div>
    <p className="text-2xl font-bold text-gray-200 mb-8">Today's Highlights</p>
    <div className="grid grid-cols-2 gap-8">
      <HighlightsCard name="Wind status" value="7" unit="mph">
        <WindDirection compass="WSW" degrees={210} />
      </HighlightsCard>
      <HighlightsCard name="Humidity" value="84" unit="%">
        <ProgressBar value=".1" />
      </HighlightsCard>
      <HighlightsCard name="Visibility" value="6,4" unit=" miles" />
      <HighlightsCard name="Air pressure" value="998" unit=" mb" />
    </div>
  </div>
);

export default Highlights;
