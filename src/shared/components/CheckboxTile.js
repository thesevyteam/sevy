const CheckboxTile = ({ text, isActive, onClick, className }) => {
  return (
    <div
      className={`w-full h-4 flex items-center justify-between ${className}`}
    >
      <div
        className={`w-4 h-4 cursor-pointer rounded shadow-md border-2 active:scale-90 transition-all duration-200 ${
          isActive ? 'border-primary bg-primary' : 'border-gray-400 bg-white'
        }`}
        onClick={onClick}
      />
      <div className="text-center text-sm">{text}</div>
    </div>
  );
};

export default CheckboxTile;
