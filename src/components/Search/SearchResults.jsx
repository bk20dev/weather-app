import SearchResult from './SearchResult';

const SearchResults = ({ results, onSelect }) => (
  <div className="flex flex-col gap-6">
    {results.map(({ title, woeid }) => (
      <SearchResult key={woeid} title={title} onClick={() => onSelect(woeid)} />
    ))}
  </div>
);

export default SearchResults;
