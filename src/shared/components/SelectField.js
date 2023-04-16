import Select from 'react-select';

const SelectField = ({ id, options, value, onChange }) => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      // border: '1.2px solid transparent',
      border: state.isFocused ? '1.5px solid #40916C' : '0px solid transparent',
      boxShadow: state.isFocused ? 0 : 0,
      '&:hover': {
        borderColor: state.isFocused ? 0 : 0,
      },
      borderRadius: '0.375rem',
      height: '2.5rem',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? '#40916C'
        : state.isFocused
        ? '#D8F3DC'
        : state.isActive
        ? '#2D6A4F'
        : null,
      color: state.isSelected ? 'white' : '#545454', // text color for selected item
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: '4px',
    }),
    clearIndicator: (provided) => ({
      ...provided,
      padding: '4px',
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: '2px 8px',
    }),
    input: (provided) => ({
      ...provided,
      margin: '0',
      padding: '0',
    }),
  };

  return (
    <Select
      className="rounded-md shadow-md hover:shadow-lg"
      id={id}
      value={value}
      onChange={(selectedOption) => onChange(selectedOption)}
      options={options}
      styles={customStyles}
    />
  );
};

export default SelectField;
