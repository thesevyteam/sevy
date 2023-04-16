import { useState } from 'react';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function AppCalendar() {
  const [date, setDate] = useState(new Date());

  const onDateChange = (newDate) => {
    setDate(newDate);
  };

  const isWeekend = ({ date }) => {
    const day = date.getDay();
    return day === 0 || day === 6;
  };

  return (
    <div>
      <Calendar
        onChange={onDateChange}
        value={date}
        minDate={new Date()}
        maxDate={new Date(Date.now() + 60 * 24 * 60 * 60 * 1000)}
        tileDisabled={({ date, view }) => isWeekend({ date, view })}
      />
    </div>
  );
}

export default AppCalendar;
