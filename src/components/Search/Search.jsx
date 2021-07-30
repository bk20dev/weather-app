import SearchBar from './SearchBar';

const Search = () => {
  return (
    <div className="bg-gray-800 text-gray-200 h-screen p-12">
      <SearchBar onSearch={console.log} />
    </div>
  );
};

export default Search;
