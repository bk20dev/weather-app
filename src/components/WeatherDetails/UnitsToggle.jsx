const RoundedButton = ({ active, children, onClick }) => {
  let style = 'bg-gray-600 text-white';
  if (active) style = 'bg-gray-200 text-gray-900';

  return (
    <div
      className={`w-10 h-10 rounded-full text-center leading-10 font-bold text-lg ${style} cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const UnitsToggle = ({ current, onSelect }) => (
  <header className="flex justify-center xl:justify-end gap-3 py-10">
    <RoundedButton onClick={() => onSelect('C')} active={current === 'C'}>
      °C
    </RoundedButton>
    <RoundedButton onClick={() => onSelect('F')} active={current === 'F'}>
      °F
    </RoundedButton>
  </header>
);

export default UnitsToggle;
