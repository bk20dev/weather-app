import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import fetchWeather from '../../actions/fetchWeather';
import CloseIcon from '../../assets/close.svg';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const Search = ({ fetchWeather, onClose }) => {
  const [place, setPlace] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!place) return setResults([]);

    (async () => {
      const response = await fetch(
        `https://cors.bridged.cc/https://www.metaweather.com/api/location/search/?query=${place}`
      );

      const data = await response.json();
      setResults(data);
    })();
  }, [place]);

  const onPlaceSelectedHandler = (place) => {
    fetchWeather(place);
    onClose();
  };

  return (
    <div className="bg-gray-800 text-gray-200 h-screen px-12 pb-12 pt-9">
      <img
        src={CloseIcon}
        alt="Close"
        onClick={onClose}
        className="h-8 mb-9 ml-auto cursor-pointer"
      />
      <SearchBar onSearch={setPlace} />
      <div className="mt-14">
        <SearchResults results={results} onSelect={onPlaceSelectedHandler} />
      </div>
    </div>
  );
};

export default connect(null, { fetchWeather })(Search);
