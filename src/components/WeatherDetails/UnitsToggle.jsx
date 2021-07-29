const RoundedButton = ({ active, children }) => {
  let style = 'bg-gray-600 text-white';
  if (active) style = 'bg-gray-200 text-gray-900';

  return (
    <div
      className={`w-10 h-10 rounded-full text-center leading-10 font-bold text-lg ${style}`}
    >
      {children}
    </div>
  );
};

const UnitsToggle = ({ current }) => (
  <header className="flex justify-end gap-3 py-10">
    <RoundedButton active={current === 'C'}>°C</RoundedButton>
    <RoundedButton active={current === 'F'}>°F</RoundedButton>
  </header>
);

export default UnitsToggle;
