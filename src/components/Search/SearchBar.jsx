import { useState } from 'react';
import SearchImage from '../../assets/search.svg';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex gap-3 items-stretch font-semibold"
    >
      <div className="relative flex-grow">
        <img
          src={SearchImage}
          alt=""
          className="absolute left-4 top-1/2 w-6 opacity-50 transform -translate-y-1/2 placeholder-gray-500"
        />
        <input
          type="text"
          role="searchbox"
          placeholder="search location"
          className="pl-14 py-3 w-full border border-gray-500 focus:border-gray-200 outline-none bg-transparent h-full"
          style={{ font: 'inherit' }}
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
      <button
        role="search"
        className="p-4 bg-blue-700"
        style={{ font: 'inherit' }}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
