import SearchResult from './SearchResult';

const SearchResults = ({ results, onSelect }) => (
  <div className="flex flex-col gap-6">
    {results.map(({ title }) => (
      <SearchResult title={title} onClick={() => onSelect(title)} />
    ))}
  </div>
);

export default SearchResults;
