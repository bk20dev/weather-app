import ArrowRightIcon from '../../assets/arrow_right.svg';

const SearchResult = ({ title, onClick }) => (
  <div
    className="group flex items-center justify-between border border-transparent hover:border-gray-500 cursor-pointer py-6 px-3"
    onClick={onClick}
  >
    <p key={title} className="font-semibold">
      {title}
    </p>
    <img
      src={ArrowRightIcon}
      alt=""
      className="h-6 opacity-0 group-hover:opacity-50 pointer-events-none"
    />
  </div>
);

export default SearchResult;
