const ToggleUnit = ({ units, setUnits }) => {
  return (
    <button
      className="text-sm px-2 py-1 border rounded"
      onClick={() => setUnits(units === 'metric' ? 'imperial' : 'metric')}
    >
      Đơn vị: {units === 'metric' ? '°C' : '°F'}
    </button>
  );
};

export default ToggleUnit;