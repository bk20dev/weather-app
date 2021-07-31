import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { BounceLoader } from 'react-spinners';
import clearWeather from '../../actions/clearWeather';
import fetchWeather from '../../actions/fetchWeather';
import CloseIcon from '../../assets/close.svg';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const Search = ({ fetchWeather, onClose, clearWeather }) => {
  const [place, setPlace] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!place) return setResults([]);

    (async () => {
      setLoading(true);

      const response = await fetch(
        `https://cors.bridged.cc/https://www.metaweather.com/api/location/search/?query=${place}`
      );

      const data = await response.json();
      setResults(data);
      setLoading(false);
    })();
  }, [place]);

  const onPlaceSelectedHandler = (place) => {
    clearWeather();
    fetchWeather(place);
    onClose();
  };

  const renderResults = () => {
    if (loading) {
      return (
        <div className="mt-10">
          <BounceLoader
            color="#FF712E"
            size="4rem"
            css="display: block; margin: auto;"
          />
        </div>
      );
    }

    if (!place) {
      return (
        <p className="text-center font-semibold mt-10">
          Type something then click "Search"
        </p>
      );
    }

    if (results.length === 0) {
      return <p className="text-center font-semibold mt-10">No results</p>;
    }

    return (
      <SearchResults results={results} onSelect={onPlaceSelectedHandler} />
    );
  };

  return (
    <div className="flex flex-col bg-gray-800 text-gray-200 h-screen px-12 pb-12 pt-9">
      {/* prettier-ignore */}
      <img src={CloseIcon} alt="Close" onClick={onClose} className="h-8 mb-9 ml-auto cursor-pointer" />
      <SearchBar onSearch={setPlace} />
      <div className="my-14 overflow-y-auto flex-grow">{renderResults()}</div>
    </div>
  );
};

export default connect(null, { fetchWeather, clearWeather })(Search);
