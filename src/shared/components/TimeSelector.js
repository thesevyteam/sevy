import SelectField from './SelectField';

function TimeSelector({ time, setTime }) {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 6 }, (_, i) => i * 10);

  const handlePriceChange = (selectedOption) => {
    setTime(selectedOption);
  };

  const timeOptions = hours.flatMap((hour) =>
    minutes.map((minute) => {
      const hour12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
      const period = hour < 12 ? 'AM' : 'PM';
      const hourString = hour12.toString().padStart(2, '0');
      const minuteString = minute.toString().padStart(2, '0');
      return {
        value: `${hourString}:${minuteString} ${period}`,
        label: `${hourString}:${minuteString} ${period}`,
      };
    })
  );

  return (
    <SelectField
      id="time"
      value={time}
      onChange={handlePriceChange}
      options={timeOptions}
      onBg={true}
    />
  );
}

export default TimeSelector;
